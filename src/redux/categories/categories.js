const STATUS_CHECKED = 'bookstore/categories/CHECK_STATUS';
const initialState = [];

export function statusChecked() {
  return {
    type: STATUS_CHECKED,
  };
}

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case STATUS_CHECKED:
      return 'Under construction';
    default:
      return state;
  }
}
