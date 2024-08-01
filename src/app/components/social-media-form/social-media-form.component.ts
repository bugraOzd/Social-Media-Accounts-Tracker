import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-social-media-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './social-media-form.component.html',
  styleUrl: './social-media-form.component.css'
})
export class SocialMediaFormComponent {
  socialMediaForm: FormGroup;
  @Output() cancel = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.socialMediaForm = this.fb.group({
      socialMediaLink: [''],
      socialMediaName: [''],
      description: ['']
    });
  }

  onSubmit() {
    console.log(this.socialMediaForm.value);
    this.cancel.emit();
  }

  onCancel() {
    this.cancel.emit();
  }
}
