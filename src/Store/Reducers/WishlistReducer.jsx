import {
  ADD_WISHLIST_RED,
  DELETE_WISHLIST_RED,
  GET_WISHLIST_RED,
  UPDATE_WISHLIST_RED,
} from "../Constant";

export default function WishlistReducer(state = [], action) {
  let newState = state;
  let index;

  switch (action.type) {
    case ADD_WISHLIST_RED:
      newState = state;
      newState.push(action.payload);
      return newState;
    case GET_WISHLIST_RED:
      return action.payload;
    case UPDATE_WISHLIST_RED:
      newState = state;
      index = newState.findIndex((item) => item.id === action.payload.id);
      newState[index].name = action.payload.name;
      newState[index].pic = action.payload.pic;
      return newState;
    case DELETE_WISHLIST_RED:
      newState = state;
      index = newState.findIndex((item) => item.id === action.payload.id);
      newState.splice(index, 1);
      return newState;
    default:
      return newState;
  }
}
