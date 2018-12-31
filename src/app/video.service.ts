import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
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

  addVideo(video: IVideo): Observable<IVideo[]> {
    let headers = new HttpHeaders({'ConteNT-Type': 'application/json'});
    console.log(' info sur video'+ video);
    return this.http.post<IVideo[]>(this._getUrl, JSON.stringify(video), {headers : headers})
                    .catch(this.errorHandler); 
                    
  }

  updateVideo(video: IVideo): Observable<IVideo[]> {
    let headers = new HttpHeaders({'ConteNT-Type': 'application/json'});
    console.log(' info sur video'+ video);
    return this.http.post<IVideo[]>(this._getUrl + video.Id, JSON.stringify(video), {headers : headers})
                    .catch(this.errorHandler); 
                    
  }

  errorHandler(error: HttpErrorResponse ){

 return Observable.throw(error.message || "Server Error");
  }

}
