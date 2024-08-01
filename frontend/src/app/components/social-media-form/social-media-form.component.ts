import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { SocialMedia } from '../../utils/interfaces/SocialMedia.interface';

@Component({
  selector: 'app-social-media-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './social-media-form.component.html',
  styleUrl: './social-media-form.component.css'
})
export class SocialMediaFormComponent implements OnInit {
  socialMediaForm: FormGroup;
  updateId: string = '';

  @Input() socialMediaItem: SocialMedia | null = null;

  @Output() cancel = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.socialMediaForm = this.fb.group({
      socialMediaLink: [''],
      socialMediaName: [''],
      description: ['']
    });
  }

  ngOnInit(): void {
    console.log(this.socialMediaItem)
    this.setUpdateData();
  }

  onSubmit() {
    console.log(this.socialMediaForm.value);
    this.cancel.emit();
  }

  onCancel() {
    this.cancel.emit();
  }

  setUpdateData() {
    if (!this.socialMediaItem) return;

    this.updateId = this.socialMediaItem.id;
    this.socialMediaForm.setValue({
      socialMediaLink: this.socialMediaItem.socialMediaLink,
      socialMediaName: this.socialMediaItem.socialMediaName,
      description: this.socialMediaItem.description
    });
  }
}
