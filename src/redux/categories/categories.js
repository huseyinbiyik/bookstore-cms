const STATUS_CHECKED = 'STATUS_CHECKED';
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
