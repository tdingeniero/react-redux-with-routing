export const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

export const getUser = () => ({
  type: GET_USER,
});

export const setUser = (user) => ({
  type: SET_USER,
  user,
});

const initializeState = {
  user: undefined,
};

export default (state = initializeState, action) => {
  switch (action.type) {
    // case GET_USER:
    //   return { ...state, count: state.count + 1 };
    case SET_USER:
      const { user } = action;
      return { ...state, user };
    default:
      return state;
  }
};
