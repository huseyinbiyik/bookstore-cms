const BOOK_ADDED = 'BOOK_ADDED';
const BOOK_REMOVED = 'BOOK_REMOVED';
const initialState = [],

export const bookAdded =  (book) => {
  return { type: BOOK_ADDED,  payload: book }
}

export const bookRemoved = (index) => {
  return { type: BOOK_REMOVED }
}

const bookReducer = (state = initialState, action ) => {
  switch (action.type) {
    case BOOK_ADDED:
      return [...state, action.payload]
      case BOOK_REMOVED:
        return [...state.filter((book) => book !== action.payload)];
    default:
return state;
  }
}

export default bookReducer;