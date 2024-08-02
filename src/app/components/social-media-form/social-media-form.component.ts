import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { SocialMedia } from '../../utils/interfaces/SocialMedia.interface';
import { NewSocialMedia } from '../../utils/interfaces/NewSocialMedia.interface';

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
  @Output() create = new EventEmitter<NewSocialMedia>();
  @Output() edit = new EventEmitter<{ id: string; item: SocialMedia }>();
  @Output() cancel = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.socialMediaForm = this.fb.group({
      socialMediaLink: [''],
      socialMediaName: [''],
      description: ['']
    });
  }

  ngOnInit(): void {
    this.setUpdateData();
  }

  onSubmit() {
    if (!this.updateId) {
      // emit create if there is no id for update action
      this.create.emit(this.socialMediaForm.value);
    } else {
      // emit update if there is id for update function
      this.edit.emit({ id: this.updateId, item: this.socialMediaForm.value });
    }

    this.cancel.emit();
  }

  onCancel() {
    this.cancel.emit();
  }

  setUpdateData() {
    if (!this.socialMediaItem) return;

    this.updateId = this.socialMediaItem._id;
    this.socialMediaForm.setValue({
      socialMediaLink: this.socialMediaItem.socialMediaLink,
      socialMediaName: this.socialMediaItem.socialMediaName,
      description: this.socialMediaItem.description
    });
  }
}
