const initialState = {
  projects: [
    { id: "1000", title: "HUSD", content: "puppy dogs" },
    { id: "2000", title: "OUSD", content: "bunnies" },
    { id: "3000", title: "SFUSD", content: "kittens" }
  ]
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project: ", action.project);
      return state;

    case "CREATE_PROJECT_ERROR":
      console.log("created project error: ", action.err);
      return state;

    default:
      return state;
  }
  //return state;
};

export default projectReducer;
