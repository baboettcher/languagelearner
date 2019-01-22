export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // async
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const auth = getState().firebase.auth.uid;

    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirst: profile.firstName,
        authorLast: profile.lastName,
        authorId: auth,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({
          type: "CREATE_PROJECT",
          project
        });
      })
      .then(err => {
        dispatch({
          type: "CREATE_PROJECT_ERROR",
          err
        });
      });
  };
};

// set up connect, mapstateToProps, update the first, last annd Id
