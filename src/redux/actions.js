import { createAction } from "redux-actions";
import * as constants from "./constants";

export const doSignUpRequest = createAction(constants.SIGN_UP_REQUEST);
export const doSignInRequest = createAction(constants.SIGN_IN_REQUEST);
export const signUpSuccess =  createAction(constants.SIGN_UP_SUCCESS);
export const errorAuthentication= createAction(constants.ERROR_AUTHENTICATION);
export const doSignOutRequest=createAction(constants.SIGN_OUT_REQUEST);
export const signInSuccess=createAction(constants.SIGN_IN_SUCCESS);
export const signOutSuccess=createAction(constants.SIGN_OUT_SUCCESS)