import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IdeasState } from './ideas.reducer';

export const selectIdeasState =
  createFeatureSelector<IdeasState>('ideas');

export const selectAllIdeas = createSelector(
  selectIdeasState,
  (state) => state.ideas
);
