import * as types from "../actions/actionTypes";

const initialState = {
  page: "login",
  username: "",
  category: "",
  questionData: "",
  questionsAnswered: 0,
  lives: 3,
  points: 0,
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "test1":
      return { ...state };

    case types.PAGE_CHANGE:
      newState.username = action.payload.username;
      newState.page = action.payload.value;
      return newState;

    case types.START_GAME:
      newState.category = action.payload.category;
      newState.page = "game";
      return newState;

    case types.ADD_QUESTIONS:
      newState.questionData = action.payload;
      return newState;

    case types.ANSWER_QUESTION:
      console.log("question answered");
      console.log(action.payload.answer, "Your answer");
      console.log(action.payload.correctAnswer, "correctAnswer");
      if (action.payload.answer === action.payload.correctAnswer) {
        newState.points += 10;
      } else {
        newState.lives--;
      }
      newState.questionsAnswered = state.questionsAnswered + 1;
      return newState;

    case types.GAME_OVER:
      console.log("reducer reached gameOVer");
      newState.page = "gameOver";
      newState.lives = 3;
      return newState;

    default: {
      return state;
    }
  }
};

export default reducer;
