import * as constants from "../constants";

let initialState = {
  signUp: {
    data: {}
  },
  signIn: {
    data: {}
  },
  status:""
};

export const login = (state = initialState, action) => {
  switch (action.type) {
    case constants.SIGN_UP_SUCCESS:
      return {
        ...state,
        signUp: {
          data: { ...action.payload }
        }
      };
    case constants.SIGN_IN_SUCCESS:
      return {
        ...state,
        signIn: {
          data: { ...action.payload }
        }
      };
      case constants.ERROR_AUTHENTICATION:
      return {
        ...state,
        status:action.payload
      };
      
    case constants.SIGN_OUT_SUCCESS:
      return {
       state:{}
      }
    
  }

  return state;
};
