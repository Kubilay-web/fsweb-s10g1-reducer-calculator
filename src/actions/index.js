export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const SAVE_TO_MEMORY = "SAVE_TO_MEMORY";
export const APPLY_MEMORY_TO_TOTAL="APPLY_MEMORY_TO_TOTAL";
export const CLEAR_MEMORY="CLEAR_MEMORY";

export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

