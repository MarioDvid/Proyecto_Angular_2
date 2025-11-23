import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forbiddenWordValidator } from '../../validators/forbidden-word.validator';

@Component({
  selector: 'app-idea-form',
  templateUrl: './idea-form.component.html'
})
export class IdeaFormComponent {

  @Output() ideaCreated = new EventEmitter<{ title: string; category: string }>();

  ideaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.ideaForm = this.fb.group({
      title: [
        '',
        [
          Validators.required,
          forbiddenWordValidator('prohibido')
        ]
      ],
      category: [
        '',
        [
          Validators.required
        ]
      ]
    });
  }

  get titleControl() {
    return this.ideaForm.get('title');
  }

  get categoryControl() {
    return this.ideaForm.get('category');
  }

  onSubmit() {
    if (this.ideaForm.invalid) {
      this.ideaForm.markAllAsTouched();
      return;
    }

    this.ideaCreated.emit(this.ideaForm.value);
    this.ideaForm.reset();
  }
}
