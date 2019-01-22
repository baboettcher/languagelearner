export const signIn = credentials => {
  // added third param
  return (dispatch, getState, { getFirebase }) => {
    //initialize firebase instance
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({
          type: "LOGIN_SUCCESS"
        });
      })
      .catch(err => {
        dispatch({
          type: "LOGIN_ERROR",
          err
        });
      });
  };
};

export const signOut = () => {
  console.log("signout called");
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({
          type: "SIGNOUT_SUCCESS"
        });
      });
  };
};

// newUSer: email, pw, first, last
export const signUpUser = newUser => {
  console.log("signup new user called");
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    console.log("=====>>>>", firebase);
    // .add -- autogenerates ID, but we want to use firebase ID from response object
    // .doc -- creates a new doc with given id
    // .set -- pass in object of properties
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(response => {
        console.log("===>>", response.user);
        return firestore // returns a promise
          .collection("users")
          .doc(response.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: newUser.firstName[0] + newUser.lastName[0]
          });
        // update state
      })
      .then(() => {
        dispatch({
          type: "SIGNUP_SUCCESS"
        });
      })
      .catch(err => {
        dispatch({
          type: "SIGNUP_ERROR",
          err
        });
      });
  };
};
