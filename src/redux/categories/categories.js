const STATUS_CHECKED = 'STATUS_CHECKED';
const initialState = [];

export const = statusChecked() => {
  return {
    type: STATUS_CHECKED,
  };
}

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUS_CHECKED:
      return 'Under construction';
    default:
      return state;
  }
}

export default categoriesReducer;