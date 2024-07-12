// src/reducers/userReducer.js
const initialState = {
  user: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "REGISTER_USER":
    case "SUBSCRIBE_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}
