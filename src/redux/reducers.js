import {combineReducers} from 'redux';
import {login} from './auth/login'
import {uploadFile} from './upload_file/uploadFile'
import {loading} from './loading'
export default combineReducers({
    login,
    uploadFile,
    loading
});