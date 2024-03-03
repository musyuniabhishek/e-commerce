import {
  ADD_NEWSLETTER_RED,
  DELETE_NEWSLETTER_RED,
  GET_NEWSLETTER_RED,
  UPDATE_NEWSLETTER_RED,
} from "../Constant";

export default function NewsletterReducer(state = [], action) {
  let newState = state;
  let index;

  switch (action.type) {
    case ADD_NEWSLETTER_RED:
      newState = state;
      newState.push(action.payload);
      return newState;
    case GET_NEWSLETTER_RED:
      return action.payload;
    case UPDATE_NEWSLETTER_RED:
      newState = state;
      index = newState.findIndex((item) => item.id === action.payload.id);
      newState[index].name = action.payload.name;
      newState[index].pic = action.payload.pic;
      return newState;
    case DELETE_NEWSLETTER_RED:
      newState = state;
      index = newState.findIndex((item) => item.id === action.payload.id);
      newState.splice(index, 1);
      return newState;
    default:
      return newState;
  }
}
