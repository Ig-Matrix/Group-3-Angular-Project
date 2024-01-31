import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch, faSliders } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, FontAwesomeModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  faSearch= faSearch;
  faSliders= faSliders;

  ngOnInit(): void {}

  enteredSearchValue: string = '';

  @Output()
  searchTextChange: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged() {
    this.searchTextChange.emit(this.enteredSearchValue);
  }
}
