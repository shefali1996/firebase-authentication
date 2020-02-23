import * as constants from "../constants";

let initialState = {
 url:"",
 fileData:"",
 status:""

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
          url:"",
          status:action.payload.message
      }
      case constants.SUCCESS_UPLOAD_FILE:
      return{
        ...state,
        fileData:action.payload.response,
        status:action.payload.message
      }
      case constants.ERROR_OCCURED:
        return {
        status:action.payload.message
        }
    
  }

  return state;
};