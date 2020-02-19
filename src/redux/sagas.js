import {takeLatest,all} from 'redux-saga/effects';
import * as constants from './constants';
import {signUpRequest,signInRequest,signOutRequest} from './auth/actions'
export function* watchActions () {
    yield takeLatest(constants.SIGN_UP_REQUEST,signUpRequest);
    yield takeLatest(constants.SIGN_IN_REQUEST,signInRequest);
    yield takeLatest(constants.SIGN_OUT_REQUEST,signOutRequest);
  }
  
  export default function* rootSaga () {
    yield all([watchActions()]);
  }
  