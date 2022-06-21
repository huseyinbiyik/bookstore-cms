const BOOK_ADDED = 'BOOK_ADDED';
const BOOK_REMOVED = 'BOOK_REMOVED';
const initialState = [],

export function bookAdded (title, author){
  return {
    type: BOOK_ADDED,
  }
}

export function bookRemoved (index){
  return {
    type: BOOK_REMOVED,
    index
  }
}

export default function reducer(state = initialState, action ) {
  switch (action.type) {
    case BOOK_ADDED:
      return state.push({title, author})
      case BOOK_REMOVED:
        return state.filter
        //change later
    default:
return state;
  }
  
}