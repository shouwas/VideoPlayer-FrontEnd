import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { IVideo } from './model/video';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private _getUrl: string = 'http://localhost:55890/api/videos/';

  constructor(private http: HttpClient) { }

  getVideos(): Observable<IVideo[]> {
    return this.http.get<IVideo[]>(this._getUrl)
                    .catch(this.errorHandler); 
  }

  errorHandler(error: HttpErrorResponse ){

 return Observable.throw(error.message || "Server Error");
  }

}
