import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { filterItems } from 'src/app/video.models';

@Component({
  selector: 'app-videos-filter',
  templateUrl: './videos-filter.component.html',
  styleUrls: ['./videos-filter.component.css']
})
export class VideosFilterComponent implements OnInit {
  @Output() selectItemEvent = new EventEmitter<string>();

  filters = [
    {value: filterItems.title, viewValue: 'Name'},
    {value: filterItems.author, viewValue: 'Author'},
    {value: filterItems.uploadTime , viewValue: 'Date'},
  ];

  selectedFilter = '';

  constructor() { }

  ngOnInit(): void {}

  public selectFilter(event: Event) {
    this.selectedFilter = (event.target as HTMLSelectElement).value;
    this.selectItemEvent.emit(this.selectedFilter);
  }
}
