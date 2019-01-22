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

    case "SIGNUP_SUCCESS":
      console.log("signup success");
      return { ...state, authError: null };

    case "SIGNUP_ERROR":
      console.log("signup error");
      return { ...state, authError: action.err.message };

    default:
      return state;
  }
  return state;
};

export default authReducer;
