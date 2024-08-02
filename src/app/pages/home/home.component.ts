import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { matChevronLeft, matChevronRight, matFilterAlt, matPlus, matSearch } from '@ng-icons/material-icons/baseline';
import { TableComponent } from '../../components/table/table.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { SocialMediaFormComponent } from '../../components/social-media-form/social-media-form.component';
import { SocialMedia } from '../../utils/interfaces/SocialMedia.interface';
import { SocialMediaService } from '../../utils/services/social-media.service';
import { AsyncPipe } from '@angular/common';
import { NewSocialMedia } from '../../utils/interfaces/NewSocialMedia.interface';
import { BehaviorSubject, combineLatest, debounceTime, distinctUntilChanged, map, Observable, switchMap } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgIconComponent,
    TableComponent,
    ModalComponent,
    SocialMediaFormComponent,
    AsyncPipe,
    FormsModule,
    SearchBarComponent,
    PaginationComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  viewProviders: [provideIcons({ matFilterAlt, matSearch, matPlus, matChevronRight, matChevronLeft })]
})
export class HomeComponent {
  private refreshSubject = new BehaviorSubject<void>(undefined);
  private searchTermSubject = new BehaviorSubject<string>('');
  private currentPageSubject = new BehaviorSubject<number>(1);
  private itemsPerPageSubject = new BehaviorSubject<number>(5);

  $socialMediaItems: Observable<SocialMedia[]> = combineLatest([
    this.refreshSubject.pipe(
      switchMap(() => this.socialMediaService.getSocialMediaItems())
    ),
    this.searchTermSubject,
    this.currentPageSubject,
    this.itemsPerPageSubject
  ]).pipe(
    map(([items, searchTerm, currentPage, itemsPerPage]) => {
      const filteredItems = items.filter(item =>
        item.socialMediaName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.socialMediaLink.toLowerCase().includes(searchTerm.toLowerCase())
      );
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = (startIndex + itemsPerPage);
      return filteredItems.slice(startIndex, endIndex);
    })
  );

  isSocialMediaModalVisible = false;
  editingSocialMediaItem: SocialMedia | null = null;
  searchTerm = '';
  currentPage = 1;
  itemsPerPage = 5;

  constructor(private socialMediaService: SocialMediaService) { }

  onSearchTermChange(term: string) {
    this.searchTermSubject.next(term);
  }

  onCurrentPageChange(page: number) {
    this.currentPage = page;
    this.currentPageSubject.next(page);
  }

  onItemsPerPageChange(num: number) {
    this.itemsPerPageSubject.next(num);
  }


  onClickAddNewAccout() {
    this.isSocialMediaModalVisible = true;
  }

  onClickCloseModal() {
    this.editingSocialMediaItem = null;
    this.isSocialMediaModalVisible = false;
  }

  onCreateNewItem(item: NewSocialMedia) {
    this.socialMediaService.createSocialMediaItem(item).subscribe({
      next: () => {
        this.refreshData();
        this.isSocialMediaModalVisible = false
      },
      error: (err) => console.error('Error creating item:', err)
    });
  }

  onEditClick(item: SocialMedia) {
    this.isSocialMediaModalVisible = true;
    this.editingSocialMediaItem = item;
  }

  onConfirmEdit(data: { id: string, item: SocialMedia }) {
    const { id, item } = data;
    this.socialMediaService.updateSocialMediaItem(id, item).subscribe({
      next: () => {
        this.refreshData();
        this.isSocialMediaModalVisible = false
      },
      error: (err) => console.error('Error updating item:', err)
    });
  }

  onDeleteClick(id: string) {
    this.socialMediaService.deleteSocialMediaItem(id).subscribe({
      next: () => this.refreshData(),
      error: (err) => console.error('Error deleting item:', err)
    });
  }

  private refreshData() {
    this.refreshSubject.next();
  }
}
