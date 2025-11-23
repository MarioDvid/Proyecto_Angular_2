import { createAction, props } from '@ngrx/store';
import { Idea } from '../models/idea.model';

export const addIdea = createAction(
  '[Ideas] Add Idea',
  props<{ idea: Idea }>()
);

export const deleteIdea = createAction(
  '[Ideas] Delete Idea',
  props<{ id: number }>()
);

export const upvoteIdea = createAction(
  '[Ideas] Upvote Idea',
  props<{ id: number }>()
);

export const downvoteIdea = createAction(
  '[Ideas] Downvote Idea',
  props<{ id: number }>()
);
