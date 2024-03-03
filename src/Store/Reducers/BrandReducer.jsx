import {
  ADD_BRAND_RED,
  DELETE_BRAND_RED,
  GET_BRAND_RED,
  UPDATE_BRAND_RED,
} from "../Constant";

export default function BrandReducer(state = [], action) {
  let newState = state;
  let index;

  switch (action.type) {
    case ADD_BRAND_RED:
      newState = state;
      newState.push(action.payload);
      return newState;
    case GET_BRAND_RED:
      return action.payload;
    case UPDATE_BRAND_RED:
      newState = state;
      index = newState.findIndex((item) => item.id === action.payload.id);
      newState[index].name = action.payload.name;
      newState[index].pic = action.payload.pic;
      return newState;
    case DELETE_BRAND_RED:
      newState = state;
      index = newState.findIndex((item) => item.id === action.payload.id);
      newState.splice(index, 1);
      return newState;
    default:
      return newState;
  }
}
