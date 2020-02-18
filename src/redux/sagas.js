import {takeLatest} from 'redux-saga/effects';
import * as constants from './constants';
import {signUpRequest} from './auth/actions'
export function* watchActions () {
    yield takeLatest(constants.SIGN_UP_REQUEST,signUpRequest);
  }
  
  export default function* rootSaga () {
    console.log("here")
    yield [
      watchActions()
    ];
  }
  