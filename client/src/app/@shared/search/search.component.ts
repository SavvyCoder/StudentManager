import { Component, OnInit, Output, EventEmitter } from '@angular/core';

/**
 * @title Input with a clear button
 */
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  value: string;

  @Output() search = new EventEmitter<string>();
  constructor() {
    this.value = '';
  }
  ngOnInit() {}
}
