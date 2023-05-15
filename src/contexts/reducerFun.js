export const reducerFun = (state, action) => {
  switch (action.type) {
    case "COLOR":
      return {
        ...state,
        color: action.payload.check
          ? [...state.color, action.payload.option]
          : state.color.filter((colorValue) => colorValue !== action.payload.option),
      };
    case "GENDER":
      return {
        ...state,
        gender: action.payload,
      };
    default:
      return state;
  }
};