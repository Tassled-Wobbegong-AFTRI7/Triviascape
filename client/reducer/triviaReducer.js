import * as types from "../actions/actionTypes";

const initialState = {
  test: "test",
  page: "login",
  username: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "test1":
      return { ...state };

    case types.PAGE_CHANGE:
      return { ...state, page: action.payload };

    default: {
      return state;
    }
  }
};

export default reducer;
