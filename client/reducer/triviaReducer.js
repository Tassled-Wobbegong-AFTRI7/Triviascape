import * as types from "../actions/actionTypes";

const initialState = {
  test: "test",
  create: "login",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "test1":
      return { ...state };

    case types.CREATE_USER:
      console.log("action fired sd");
      return { ...state, create: "createUser" };

    default: {
      console.log("default");
      return state;
    }
  }
};

export default reducer;
