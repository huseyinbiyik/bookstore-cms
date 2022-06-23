// import { v4 as uuidv4 } from 'uuid';

const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/6d2XiqbsGJ6zQsrtUdmp';

const BOOK_ADDED = 'bookstore/books/ADD_BOOK';
const BOOK_REMOVED = 'bookstore/books/BOOK_REMOVED';
const BOOK_DISPLAYED = 'bookstore/books/BOOK_DISPLAYED';

export function bookAdded(book) {
  return { type: BOOK_ADDED, payload: book };
}

export function bookRemoved(book) {
  return { type: BOOK_REMOVED, payload: book };
}

export const bookDisplayed = (data) => ({
  type: BOOK_DISPLAYED,
  data,
});

export const fetchBook = () => (
  (dispatch) => {
    fetch(`${apiUrl}/books`)
      .then((response) => response.json())
      .then((json) => dispatch(bookDisplayed(json)));
  }
);

export default function bookReducer(state = {}, action) {
  switch (action.type) {
    case BOOK_DISPLAYED:
      return action.data;
    // case BOOK_ADDED:
    //   return [...state, action.payload];
    // case BOOK_REMOVED:
    //   return [...state.filter((book) => book.id !== action.payload.id)];
    default:
      return state;
  }
}
