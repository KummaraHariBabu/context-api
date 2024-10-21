export const initialState = {
  person: "",
  error: "",
  loading: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "START":
      return { ...state, loading: true, person: "", error: "" };
    case "SUCCESS":
      return { ...state, loading: false, person: action.payload, error: "" };
    case "FAIL":
      return { ...state, loading: false, person: "", error: action.payload };
    default:
      break;
  }
};
