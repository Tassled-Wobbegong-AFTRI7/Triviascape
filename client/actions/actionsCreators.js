import * as types from "./actionTypes";

export const pageChange = (value, username) => ({
  type: types.PAGE_CHANGE,
  payload: { value, username },
});

export const startGame = (category, username) => ({
  type: types.START_GAME,
  payload: { category, username },
});

export const addQuestions = (data) => ({
  type: types.ADD_QUESTIONS,
  payload: data,
});

export const answerQuestion = (answer, correctAnswer) => ({
  type: types.ANSWER_QUESTION,
  payload: { answer, correctAnswer },
});

export const resetGame = (username) => ({
  type: types.RESET_GAME,
  payload: username,
});

<<<<<<< HEAD
export const loadGame = (state) => ({
  type: types.LOAD_GAME,
  payload: state
=======
export const hardMode = () => ({
  type: types.HARD_MODE,
  payload: ""
>>>>>>> main
})

// export const gameOver = () => ({
//   type: types.GAME_OVER,
//   payload: "",
// });


export const timer = () => ({
  type: types.TIMER,
  payload: ""
})