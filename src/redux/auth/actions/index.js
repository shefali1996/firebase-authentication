import {call, put} from 'redux-saga/effects';
import {firebase} from '../../../container/Firebase/index'
import * as actions from '../../actions'

export function* signUpRequest (action) {
    try {
      const response = yield firebase.doCreateUserWithEmailAndPassword(action.payload.email,action.payload.password);
      if (response) {
        yield localStorage.setItem("token",response.user.refreshToken)
        yield localStorage.setItem("email",response.user.email)
        yield put(actions.signUpSuccess(response.user));
      } else {
        yield put(actions.errorAuthentication("Error Occurs"));
      }
    } catch (e) {
      yield put(actions.errorAuthentication(e.message));
    }
  }

  export function* signInRequest (action) {
    try {
      const response = yield firebase.doSignInWithEmailAndPassword(action.payload.email,action.payload.password);
      if (response) {
        yield localStorage.setItem("token",response.user.refreshToken)
        yield localStorage.setItem("email",response.user.email)
        yield put(actions.signInSuccess(response.user));
      } else {
        yield put(actions.errorAuthentication("Error Occurs"));
      }
    } catch (e) {
      yield put(actions.errorAuthentication(e.message));
    }
  }
  
  export function* signOutRequest (action) {
    try {
      yield put(actions.signOutSuccess());
      yield firebase.doSignOut();
      yield localStorage.clear()
    } catch (e) {
    }
  }