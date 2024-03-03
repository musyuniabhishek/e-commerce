import {
  ADD_PRODUCT_RED,
  DELETE_PRODUCT_RED,
  GET_PRODUCT_RED,
  UPDATE_PRODUCT_RED,
} from "../Constant";

export default function ProductReducer(state = [], action) {
  let newState = state;
  let index;

  switch (action.type) {
    case ADD_PRODUCT_RED:
      newState = state;
      newState.push(action.payload);
      return newState;
    case GET_PRODUCT_RED:
      return action.payload;
    case UPDATE_PRODUCT_RED:
      newState = state;
      index = newState.findIndex((item) => item.id === action.payload.id);
      newState[index] = { ...action.payload };
      return newState;
    case DELETE_PRODUCT_RED:
      newState = state;
      index = newState.findIndex((item) => item.id === action.payload.id);
      newState.splice(index, 1);
      return newState;
    default:
      return newState;
  }
}
