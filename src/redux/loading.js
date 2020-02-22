import * as constants from "../redux/constants";

let initialState = {
 loading:false
};

export const loading = (state = initialState, action) => {
  console.log(action.type,"rrrrrrrrr")
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