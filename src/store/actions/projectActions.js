export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // async
    const firestore = getFirestore();

    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirst: "Badass",
        authorLast: "Beeech",
        authorId: "01389jd",
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
