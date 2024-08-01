import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { matDelete, matEdit } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  viewProviders: [provideIcons({ matEdit, matDelete })]
})
export class TableComponent {
  headers = ['Sosyal Medya Linki', 'Sosyal Medya Adı', 'Açıklama'];

  socialMediaList: any[] = [
    {
      link: 'instagram.com/mobilerast/',
      name: 'instagram',
      description: "We'll help you to finish your development project successfully."
    },
    {
      link: 'tr.linkedin.com/company/rastmobile',
      name: 'linkedin',
      description: 'Hire vetted developers from Rast Mobile to scale up your tech projects.'
    },
    {
      link: 'behance.net/rastmobile',
      name: 'behance',
      description: 'Software Development Agency Rast Mobile Information Technology Ltd.'
    },
    {
      link: 'twitter.com/rastmobile',
      name: 'twitter',
      description: 'Software Development Agency Rast Mobile Information Technology Ltd.'
    }
  ];
}
