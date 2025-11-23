import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Idea } from '../../models/idea.model';
import { addIdea, deleteIdea, upvoteIdea, downvoteIdea } from '../../state/ideas.actions';
import { selectAllIdeas } from '../../state/ideas.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ideas-page',
  templateUrl: './ideas-page.component.html'
})
export class IdeasPageComponent {
  ideas$: Observable<Idea[]> = this.store.select(selectAllIdeas);

  constructor(private store: Store) {}

  onIdeaCreated(ideaData: { title: string; category: string }) {
    const newIdea: Idea = {
      id: Date.now(),
      title: ideaData.title,
      category: ideaData.category,
      votesUp: 0,
      votesDown: 0
    };
    this.store.dispatch(addIdea({ idea: newIdea }));
  }

  onDeleteIdea(id: number) {
    this.store.dispatch(deleteIdea({ id }));
  }

  onUpvote(id: number) {
    this.store.dispatch(upvoteIdea({ id }));
  }

  onDownvote(id: number) {
    this.store.dispatch(downvoteIdea({ id }));
  }
}
