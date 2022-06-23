const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/6d2XiqbsGJ6zQsrtUdmp';

const BOOK_DISPLAYED = 'bookstore/books/BOOK_DISPLAYED';

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

export const bookAdded = (id, title, author, category = '-') => (
  (dispatch) => {
    fetch(`${apiUrl}/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: id,
        title,
        author,
        category,
      }),
    })
      .then(() => dispatch(fetchBook()));
  }
);

export const bookRemoved = (id) => (
  (dispatch) => {
    fetch(`${apiUrl}/books/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: id,
      }),
    })
      .then(() => dispatch(fetchBook()));
  }
);

export default function bookReducer(state = {}, action) {
  switch (action.type) {
    case BOOK_DISPLAYED:
      return action.data;
    default:
      return state;
  }
}
