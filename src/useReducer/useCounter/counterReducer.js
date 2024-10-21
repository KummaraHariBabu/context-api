export const initialCount = { count: 0 };

export const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
      };
    case "RESET":
      return initialCount;

    default:
      break;
  }
};
