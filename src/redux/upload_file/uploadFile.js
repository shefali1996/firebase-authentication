import * as constants from "../constants";

let initialState = {
 url:"",
 fileData:""

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
      case constants.SUCCESS_UPLOAD_FILE:
      return{
        ...state,
        fileData:action.payload
      }
    
  }

  return state;
};