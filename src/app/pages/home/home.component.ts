import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { matFilterAlt, matPlus, matSearch } from '@ng-icons/material-icons/baseline';
import { TableComponent } from '../../components/table/table.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { SocialMediaFormComponent } from '../../components/social-media-form/social-media-form.component';
import { SocialMedia } from '../../utils/interfaces/SocialMedia.interface';
import { SocialMediaService } from '../../utils/services/social-media.service';
import { AsyncPipe } from '@angular/common';
import { NewSocialMedia } from '../../utils/interfaces/NewSocialMedia.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIconComponent, TableComponent, ModalComponent, SocialMediaFormComponent, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  viewProviders: [provideIcons({ matFilterAlt, matSearch, matPlus })]
})
export class HomeComponent {
  $socialMediaItems = this.socialMediaService.getSocialMediaItems();
  isSocialMediaModalVisible = false;
  editingSocialMediaItem: SocialMedia | null = null;

  constructor(private socialMediaService: SocialMediaService) { }

  onClickAddNewAccout() {
    this.isSocialMediaModalVisible = true;
  }

  onClickCloseModal() {
    this.editingSocialMediaItem = null;
    this.isSocialMediaModalVisible = false;
  }

  onCreateNewItem(item: NewSocialMedia) {
    console.log(item)
    this.socialMediaService.createSocialMediaItem(item).subscribe(res => res);
  }

  onEditClick(item: SocialMedia) {
    this.isSocialMediaModalVisible = true;
    this.editingSocialMediaItem = item;
  }

  onConfirmEdit(data: { id: string, item: SocialMedia }) {
    const { id, item } = data;
    this.socialMediaService.updateSocialMediaItem(id, item).subscribe(res => res);
  }

  onDeleteClick(id: string) {
    this.socialMediaService.deleteSocialMediaItem(id).subscribe(res => res);
  }
}
