import { Component, OnInit } from '@angular/core';
import { IVideo } from  './../model/video';
import { VideoService } from '../video.service';



@Component({
  selector: 'video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {

  videos: Array<IVideo> ;

  selectedVideo: IVideo;
  public errorMsg;

  onSelectVideo(video: any) {
    this.selectedVideo = video;
    console.log(this.selectedVideo);
  }
  constructor(private _videoService:VideoService) { }

  ngOnInit() {
    this._videoService.getVideos()
       .subscribe( res => this.videos = res,
                  error => this.errorMsg = error
                  );
  }

}
