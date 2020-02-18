import {call, put} from 'redux-saga/effects';
import {firebase} from '../../../container/Firebase/index'
console.log(firebase,"pppppp")

export function* signUpRequest (action) {
  console.log(action.payload,"iii")
    try {
      const response = yield call(firebase.doCreateUserWithEmailAndPassword(...action.payload));
      console.log(console.log(response,"ttttt"))
      // if (response.error == 1) {
      //   yield put(actions.forgotPasswordError(response.data.message));
      // } else {
      //   yield put(actions.forgotPasswordSuccess(response.data.message));
      // }
    } catch (e) {
      // yield put(actions.forgotPasswordError('Error Occurs !!'));
      console.warn('Some error found in "forgotPassword" action\n', e);
    }
  }