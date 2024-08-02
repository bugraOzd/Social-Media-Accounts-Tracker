import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { matChevronRight, matChevronLeft } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [FormsModule, NgIconComponent],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
  viewProviders: [provideIcons({ matChevronRight, matChevronLeft })]
})
export class PaginationComponent {
  @Input() currentPage = 1;
  @Input() itemsPerPage = 10;
  @Input() isNextPageDisabled = false;

  @Output() currentPageChange = new EventEmitter<number>();
  @Output() itemsPerPageChange = new EventEmitter<number>();

  onPageChange(page: number) {
    this.currentPageChange.emit(page);
  }

  onItemsPerPageChange(num: number) {
    this.itemsPerPageChange.emit(num);
  }
}
