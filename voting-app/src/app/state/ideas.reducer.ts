import { createReducer, on } from '@ngrx/store';
import { Idea } from '../models/idea.model';
import { addIdea, deleteIdea, upvoteIdea, downvoteIdea } from './ideas.actions';

export interface IdeasState {
  ideas: Idea[];
}

export const initialState: IdeasState = {
  ideas: [
    { id: 1, title: 'Mejorar la app móvil', category: 'Tecnología', votesUp: 2, votesDown: 0 },
    { id: 2, title: 'Crear blog interno',   category: 'Comunicación', votesUp: 1, votesDown: 1 }
  ]
};

export const ideasReducer = createReducer(
  initialState,

  on(addIdea, (state, { idea }) => ({
    ...state,
    ideas: [...state.ideas, idea],
  })),

  on(deleteIdea, (state, { id }) => ({
    ...state,
    ideas: state.ideas.filter(i => i.id !== id),
  })),

  on(upvoteIdea, (state, { id }) => ({
    ...state,
    ideas: state.ideas.map(i =>
      i.id === id ? { ...i, votesUp: i.votesUp + 1 } : i
    ),
  })),

  on(downvoteIdea, (state, { id }) => ({
    ...state,
    ideas: state.ideas.map(i =>
      i.id === id ? { ...i, votesDown: i.votesDown + 1 } : i
    ),
  }))
);
