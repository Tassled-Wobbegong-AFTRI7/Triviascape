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

// export const gameOver = () => ({
//   type: types.GAME_OVER,
//   payload: "",
// });
