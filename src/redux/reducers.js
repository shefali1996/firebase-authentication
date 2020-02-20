import {combineReducers} from 'redux';
import {login} from './auth/login'
import {uploadFile} from './upload_file/uploadFile'
export default combineReducers({
    login,
    uploadFile
});