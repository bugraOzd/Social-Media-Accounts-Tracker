import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { matFilterAlt, matPlus, matSearch } from '@ng-icons/material-icons/baseline';
import { TableComponent } from '../../components/table/table.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { SocialMediaFormComponent } from '../../components/social-media-form/social-media-form.component';
import { SocialMedia } from '../../utils/interfaces/SocialMedia.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIconComponent, TableComponent, ModalComponent, SocialMediaFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  viewProviders: [provideIcons({ matFilterAlt, matSearch, matPlus })]
})
export class HomeComponent {
  isSocialMediaModalVisible = false;
  editingSocialMediaItem: SocialMedia | null = null;

  socialMediaItems = [
    {
      id: '1',
      socialMediaLink: 'instagram.com/mobilerast/',
      socialMediaName: 'instagram',
      description: "We'll help you to finish your development project successfully."
    },
    {
      id: '2',
      socialMediaLink: 'tr.linkedin.com/company/rastmobile',
      socialMediaName: 'linkedin',
      description: 'Hire vetted developers from Rast Mobile to scale up your tech projects.'
    },
    {
      id: '3',
      socialMediaLink: 'behance.net/rastmobile',
      socialMediaName: 'behance',
      description: 'Software Development Agency Rast Mobile Information Technology Ltd.'
    },
    {
      id: '4',
      socialMediaLink: 'twitter.com/rastmobile',
      socialMediaName: 'twitter',
      description: 'Software Development Agency Rast Mobile Information Technology Ltd.'
    }
  ];

  onClickAddNewAccout() {
    this.isSocialMediaModalVisible = true;
  }

  onClickCloseModal() {
    this.editingSocialMediaItem = null;
    this.isSocialMediaModalVisible = false;
  }

  onEditClick(item: SocialMedia) {
    this.isSocialMediaModalVisible = true;
    this.editingSocialMediaItem = item;
  }

  onDeleteClick(id: string) {

  }
}
