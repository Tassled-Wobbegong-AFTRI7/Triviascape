import * as types from "./actionTypes";

export const sampleActionCreator = () => ({
  type: "",
  payload: {},
});

export const createUser = () => ({
  // console.log('createuserFired')
  type: types.CREATE_USER,
  payload: "createUser",
});
