import {takeLatest,all} from 'redux-saga/effects';
import * as constants from './constants';
import {signUpRequest,signInRequest,signOutRequest,uploadFile,getUploadFileData,deleteFile} from './auth/actions'
export function* watchActions () {
    yield takeLatest(constants.SIGN_UP_REQUEST,signUpRequest);
    yield takeLatest(constants.SIGN_IN_REQUEST,signInRequest);
    yield takeLatest(constants.SIGN_OUT_REQUEST,signOutRequest);
    yield takeLatest(constants.UPLOAD_FILE,uploadFile);
    yield takeLatest(constants.GET_UPLOAD_FILE_DATA,getUploadFileData);
    yield takeLatest(constants.DELETE_FILE,deleteFile)
  }
  
  export default function* rootSaga () {
    yield all([watchActions()]);
  }
  