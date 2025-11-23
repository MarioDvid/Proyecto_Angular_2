import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Idea } from '../../models/idea.model';

@Component({
  selector: 'app-idea-list',
  templateUrl: './idea-list.component.html'
})
export class IdeaListComponent {

  @Input() ideas: Idea[] = [];

  @Output() delete = new EventEmitter<number>();
  @Output() upvote = new EventEmitter<number>();
  @Output() downvote = new EventEmitter<number>();

  onDelete(id: number) {
    this.delete.emit(id);
  }

  onUpvote(id: number) {
    this.upvote.emit(id);
  }

  onDownvote(id: number) {
    this.downvote.emit(id);
  }
}
