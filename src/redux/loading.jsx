import * as constants from "../constants";

let initialState = {
 loading:false
};

export const uploadFile = (state = initialState, action) => {
  switch (action.type) {
    case constants.SHOW_LOADING:
      return {
        loading:true
      };
      case constants.HIDE_LOADING:
      return{
          loading:false
      }
  }

  return state;
};