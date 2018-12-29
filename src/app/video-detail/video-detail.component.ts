import { Component, OnInit } from '@angular/core';
import { IVideo } from './../model/video';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  inputs: ['video']
})
export class VideoDetailComponent implements OnInit {
  
private editTitle: boolean = false;
//  @Input() video: IVideo;

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.editTitle = false;
  }

  onTitleClick(): void{
    this.editTitle = true;
  }


}

