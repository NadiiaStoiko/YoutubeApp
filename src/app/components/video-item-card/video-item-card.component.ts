import { Component, OnInit, Input } from '@angular/core';
import { videosItem } from 'src/app/video.models';

@Component({
  selector: 'app-video-item-card',
  templateUrl: './video-item-card.component.html',
  styleUrls: ['./video-item-card.component.css']
})
export class VideoItemCardComponent implements OnInit {


  @Input() public videoItem: videosItem;
  @Input() public inputValue?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
