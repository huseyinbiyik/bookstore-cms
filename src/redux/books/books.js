const BOOK_ADDED = 'bookstore/books/ADD_BOOK';
const BOOK_REMOVED = 'bookstore/books/BOOK_REMOVED';
const initialState = [{
  title: 'The Hunger Games',
  author: 'Suzanne Collins',
}, { title: 'Les Miserables', author: 'Victor Hugo' }];

export function bookAdded(book) {
  return { type: BOOK_ADDED, payload: book };
}

export function bookRemoved(index) {
  return { type: BOOK_REMOVED, payload: index };
}

export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case BOOK_ADDED:
      return [...state, action.payload];
    case BOOK_REMOVED:
      return [...state.filter((book) => book !== action.payload)];
    default:
      return state;
  }
}
