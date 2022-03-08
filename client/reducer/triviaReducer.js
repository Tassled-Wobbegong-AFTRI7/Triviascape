import * as types from "../actions/actionTypes";

const initialState = {
  page: "login",          //determines what page should be rendered
  username: "",          
  category: "",
  questionData: "",       
  questionsAnswered: 0,   //current index of question
  lives: 3,
  points: 0,
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    //updates page and username if provided
    case types.PAGE_CHANGE:
      newState.username = action.payload.username;
      newState.page = action.payload.value;
      return newState;

    case types.START_GAME:
      newState.category = action.payload.category;
      newState.page = "game";
      return newState;

    //populates questionData with questions returned from fetch to trivia API
    case types.ADD_QUESTIONS:
      newState.questionData = action.payload;
      return newState;

    //Verifying if the answer is equal to correct answer. If so, add 10 points.
    //Else if is checking if you have one life left. If you do and get the answer wrong. Page is updated to gameOver and you are are routed to that page.
    case types.ANSWER_QUESTION:
      if (action.payload.answer === action.payload.correctAnswer) {
        newState.points += 10;
      } else if (
        newState.lives === 1 &&
        action.payload.answer !== action.payload.correctAnswer
      ) {
        newState.lives--;
        newState.page = "gameOver";
      } else {
        newState.lives--;
      }
    //increment in the questions answered, so that we can use this as the index to cycle through our question bank.
      newState.questionsAnswered = state.questionsAnswered + 1;
      return newState;
    
    //resets the game, takes user back to welcome page
    case types.RESET_GAME:
      const resetState = { ...initialState };
      resetState.page = "welcome";
      resetState.username = action.payload;
      return resetState;

    //loads saved game, updates state to the values from previously saved game
    case types.LOAD_GAME:
      console.log("in load game Reducer", action.payload);
      const {
        page,
        username,
        category,
        questionData,
        questionsAnswered,
        lives,
        points,
      } = action.payload;

      return {
        page: page,
        username: username,
        category: category,
        questionData: questionData[0],
        questionsAnswered: questionsAnswered,
        lives: lives,
        points: points,
      };

    default: {
      return state;
    }
  }
};

export default reducer;
