import { Component, OnInit, EventEmitter } from '@angular/core';
import { IVideo } from './../model/video';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  inputs: ['videos'],
  outputs: ['SelectVideo']
})
export class VideoListComponent implements OnInit {

 // @Input() videos: IVideo[];
 // @Output('SelectedVideo') SelectedVideo = new EventEmitter();

  public SelectVideo = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  onSelect(video: IVideo) {
    this.SelectVideo.emit(video);
 //   console.log(video);
  }

 
}
