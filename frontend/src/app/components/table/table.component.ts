import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { matDelete, matEdit } from '@ng-icons/material-icons/baseline';
import { SocialMedia } from '../../utils/interfaces/SocialMedia.interface';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  viewProviders: [provideIcons({ matEdit, matDelete })]
})
export class TableComponent {
  @Input() socialMediaItems: SocialMedia[] | null = null;

  @Output() edit = new EventEmitter<SocialMedia>();
  @Output() delete = new EventEmitter<string>();

  headers = ['Sosyal Medya Linki', 'Sosyal Medya Adı', 'Açıklama'];

  onEdit(item: SocialMedia) {
    this.edit.emit(item);
  }

  onDelete(id: string) {
    this.delete.emit(id);
  }
}
