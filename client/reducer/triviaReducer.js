import * as types from "../actions/actionTypes";

const initialState = {
  test: "test",
  page: "login",
  username: '',
  category: '',
  questionData: '',
  questionsAnswered: 0,
};

const reducer = (state = initialState, action) => {
  const newState = {...state};

  switch (action.type) {
    case "test1":
      return { ...state };

    case types.PAGE_CHANGE:
      newState.username = action.payload.username
      newState.page = action.payload.value
      return newState;

    case types.START_GAME:
      newState.category = action.payload.category
      newState.page = 'game'
      return newState;

    case types.ADD_QUESTIONS:
      console.log('reducer reached')
      newState.questionData = action.payload
      return newState

    case types.ANSWER_QUESTION:
      console.log('question answered')
      newState.questionsAnswered = state.questionsAnswered + 1
      return newState

    default: {
      return state;
    }
  }
};

export default reducer;
