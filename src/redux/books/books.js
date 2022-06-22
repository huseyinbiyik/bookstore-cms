import { v4 as uuidv4 } from 'uuid';

const BOOK_ADDED = 'bookstore/books/ADD_BOOK';
const BOOK_REMOVED = 'bookstore/books/BOOK_REMOVED';
const initialState = [
  {
    id: uuidv4(),
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: uuidv4(),
    title: 'Les Miserables',
    author: 'Victor Hugo',
  }];

export function bookAdded(book) {
  return { type: BOOK_ADDED, payload: book };
}

export function bookRemoved(book) {
  return { type: BOOK_REMOVED, payload: book };
}

export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case BOOK_ADDED:
      return [...state, action.payload];
    case BOOK_REMOVED:
      return [...state.filter((book) => book.id !== action.payload.id)];
    default:
      return state;
  }
}
