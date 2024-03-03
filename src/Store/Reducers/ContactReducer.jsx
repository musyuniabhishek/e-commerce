import {
  ADD_CONTACT_RED,
  DELETE_CONTACT_RED,
  GET_CONTACT_RED,
  UPDATE_CONTACT_RED,
} from "../Constant";

export default function ContactReducer(state = [], action) {
  let newState = state;
  let index;

  switch (action.type) {
    case ADD_CONTACT_RED:
      newState = state;
      newState.push(action.payload);
      return newState;
    case GET_CONTACT_RED:
      return action.payload;
    case UPDATE_CONTACT_RED:
      newState = state;
      index = newState.findIndex((item) => item.id === action.payload.id);
      newState[index].name = action.payload.name;
      newState[index].pic = action.payload.pic;
      return newState;
    case DELETE_CONTACT_RED:
      newState = state;
      index = newState.findIndex((item) => item.id === action.payload.id);
      newState.splice(index, 1);
      return newState;
    default:
      return newState;
  }
}
