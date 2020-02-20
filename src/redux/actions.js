import { createAction } from "redux-actions";
import * as constants from "./constants";

export const doSignUpRequest = createAction(constants.SIGN_UP_REQUEST);
export const doSignInRequest = createAction(constants.SIGN_IN_REQUEST);
export const signUpSuccess =  createAction(constants.SIGN_UP_SUCCESS);
export const errorAuthentication= createAction(constants.ERROR_AUTHENTICATION);
export const doSignOutRequest=createAction(constants.SIGN_OUT_REQUEST);
export const signInSuccess=createAction(constants.SIGN_IN_SUCCESS);
export const signOutSuccess=createAction(constants.SIGN_OUT_SUCCESS);
export const uploadFile= createAction(constants.UPLOAD_FILE);
export const getUploadFileData= createAction(constants.GET_UPLOAD_FILE_DATA);
export const successGetUploadFileData= createAction(constants.SUCCESS_GET_UPLOAD_FILE_DATA);
export const deleteFile= createAction(constants.DELETE_FILE);
export const errorGetUploadFileData=createAction(constants.ERROR_GET_UPLOAD_FILE_DATA);
export const successDeleteFiledata= createAction(constants.SUCCESS_DELETE_FILE_DATA);
export const show_loading=createAction(constants.SHOW_LOADING);
export const hide_loading=createAction(constants.HIDE_LOADING)