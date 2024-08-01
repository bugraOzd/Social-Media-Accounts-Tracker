import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { matFilterAlt, matSearch } from '@ng-icons/material-icons/baseline';
import { TableComponent } from '../../components/table/table.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { SocialMediaFormComponent } from '../../components/social-media-form/social-media-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIconComponent, TableComponent, ModalComponent, SocialMediaFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  viewProviders: [provideIcons({ matFilterAlt, matSearch })]
})
export class HomeComponent {
  isAddModalVisible = false;

  onClickAddNewAccout() {
    this.isAddModalVisible = true;
  }

  onClickCloseModal() {
    this.isAddModalVisible = false;
  }
}
