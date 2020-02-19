import React, { Component } from "react";
import { connect } from "react-redux";
import Dropzone from "react-dropzone";
import { firebase } from "../container/Firebase/index";
import {Button} from 'reactstrap'

class Home extends Component {
  state = {
    file: ""
  };
  onFileDrop = file => {
    this.setState({
      file: file[0]
    });
  };
  uploadFile = () => {
    firebase.uploadFile(this.state.file);
  };
  render() {
    return (
      <div>
        <h1>Welcome {localStorage.getItem("email")}</h1>
        <div>
          <label>Upload Document </label>
          <Dropzone onDrop={this.onFileDrop}>
            {({ getRootProps, getInputProps }) => {
              return (
                <section className="image-dropzone col-12">
                  <div {...getRootProps({ className: "dropzone" })}>
                    <input {...getInputProps()} />

                    <div className="drag_and_drop align-items-center">
                      <p className="uploading_doc">
                        <i className="fi flaticon-upload" />
                      </p>

                      <p className="doc_upload_place">
                        Drop a document here or click to select file to upload
                      </p>
                    </div>
                  </div>
                </section>
              );
            }}
          </Dropzone>
        </div>
        <Button onClick={this.uploadFile}>Upload</Button>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {};
};
function mapStateToProps(state) {
  return {
    signUp: state.login.signUp,
    signIn: state.login.signIn
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
