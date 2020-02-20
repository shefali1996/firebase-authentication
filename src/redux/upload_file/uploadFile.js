import * as constants from "../constants";

let initialState = {
 url:""
};

export const uploadFile = (state = initialState, action) => {
  switch (action.type) {
    case constants.SUCCESS_GET_UPLOAD_FILE_DATA:
      return {
        ...state,
        url:action.payload
      };
      case constants.ERROR_GET_UPLOAD_FILE_DATA:
      return{
          ...state,
          url:""
      }
      case constants.SUCCESS_DELETE_FILE_DATA:
      return {
          ...state,
          url:""
      }
    
  }

  return state;
};