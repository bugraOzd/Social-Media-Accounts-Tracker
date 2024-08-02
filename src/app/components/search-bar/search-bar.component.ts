import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule, NgIconComponent],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  searchTerm = '';
  @Output() searchTermChange = new EventEmitter<string>();

  onSearchTermChange(term: string) {
    this.searchTermChange.emit(term);
  }
}
