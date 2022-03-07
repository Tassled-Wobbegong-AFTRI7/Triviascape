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
      console.log("reducer reached");
      newState.questionData = action.payload;
      return newState;

    case types.ANSWER_QUESTION:
      if (action.payload.answer === action.payload.correctAnswer) {
        newState.points += 10;
      } else if (
        newState.lives === 1 &&
        action.payload.answer !== action.payload.correctAnswer
      ) {
        console.log("GAMEOVER");
        newState.lives--;
        newState.page = "gameOver";
      } else {
        newState.lives--;
      }
      newState.questionsAnswered = state.questionsAnswered + 1;
      return newState;

    case types.RESET_GAME:
      const resetState = {...initialState};
      console.log(resetState)
      resetState.page = "welcome";
      resetState.username = action.payload;
      return resetState;

    case types.LOAD_GAME:  
      console.log('in load game Reducer', action.payload)
      const {page, username,category, questionData, questionsAnswered,lives, points} = action.payload;
        
      return {page:page, username:username, category: category, questionData: questionData, questionsAnswered: questionsAnswered, lives:lIDBVersionChangeEvent, points:points};

    default: {
      return state;
    }
  }
};

export default reducer;
