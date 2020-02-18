import { createAction } from "redux-actions";
import * as constants from "./constants";

export const doSignUpRequest = createAction(constants.SIGN_UP_REQUEST);