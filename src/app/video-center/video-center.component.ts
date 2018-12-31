import { Component, OnInit } from '@angular/core';
import { IVideo } from  './../model/video';
import { VideoService } from '../video.service';



@Component({
  selector: 'video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {

  videos: Array<any> ;

  selectedVideo: any;
  private hidenNewVideo: boolean= true;
  public errorMsg;

  onSelectVideo(video: any) {
    this.selectedVideo = video;
    this.hidenNewVideo= true;
    console.log(this.selectedVideo);
  }

  onSubmitAddVideo(video: IVideo){
    console.log("info_ " + video.Title);
  this._videoService.addVideo(video)
        .subscribe(resNewVideo => {
    this.videos.push(resNewVideo);
    this.hidenNewVideo= true;
    this.selectedVideo = resNewVideo;
  } );

  }

  newVideo(){
    this.hidenNewVideo = false;
  }
  constructor(private _videoService:VideoService) { }

  ngOnInit() {
    this._videoService.getVideos()
       .subscribe( res => this.videos = res,
                  error => this.errorMsg = error
                  );
  }

}
