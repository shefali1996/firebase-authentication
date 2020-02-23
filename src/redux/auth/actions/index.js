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
      yield firebase.doSignOut();
      yield put(actions.signOutSuccess());
      yield localStorage.clear()
    } catch (e) {
      yield put(actions.errorAuthentication(e.message));
    }
  }

  export function* uploadFile(action){
    yield put(actions.show_loading())
    console.log(action.payload,"qqqqqqqqq")
    try {
      const response=yield firebase.uploadFile(action.payload.file,action.payload.uid);
        if(response){
          yield put(actions.successUploadFile({message:"File Uploaded Successfully",response:response}));
          yield put(actions.getUploadFileData({uid:action.payload.uid}));
          yield put(actions.hide_loading())
        }
        else{
          yield put(actions.errorOccured({message:"Error Occurs"}));
          yield put(actions.hide_loading())
        }
    } catch (e) {
      yield put(actions.hide_loading())
      yield put(actions.errorOccured({message:e.message}));
    }
  }

  export function* getUploadFileData(action){
    
    try {
      const response = yield firebase.getUploadFileData(action.payload.uid);
      if (response) {
        yield put(actions.successGetUploadFileData(response));
      } else {
        yield put(actions.errorGetUploadFileData(""))
      }
    } catch (e) {
      yield put(actions.errorGetUploadFileData(""))
    }
  }

  export function* deleteFile(action){
    try {
     yield firebase.deleteFile(action.payload.uid);
      yield put(actions.successDeleteFiledata({message:"File deleted successfully"}));
    } catch (e) {
      yield put(actions.errorOccured({message:e.message}));
    }
  }


  
