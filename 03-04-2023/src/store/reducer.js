export const globalReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        value: state.value + 1,
      };
    case "decrement":
      return {
        value: state.value - 1,
      };

    default:
      return state;
  }
};
