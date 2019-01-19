const initialState = {
  authError: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      return {
        ...state,
        authError: "Login Failed" // later add err object
      };

    case "LOGIN_SUCCESS":
      console.log("successful login!");
      return {
        ...state,
        authError: null
      };

    case "SIGNOUT_SUCCESS":
      console.log("signout successful");
      return state;

    default:
      return state;
  }
  return state;
};

export default authReducer;
