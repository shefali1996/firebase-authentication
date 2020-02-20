import React, { Component } from "react";
import { connect } from "react-redux";
import Dropzone from "react-dropzone";
import { firebase } from "../container/Firebase/index";
import { Button } from "reactstrap";
import * as actions from "../redux/actions";
import image from '../../src/assets/no-image.png'

class Home extends Component {
  state = {
    file: "",
    user: ""
  };
  onFileDrop = file => {
    this.setState({
      file: file[0]
    });
  };
  uploadFile = () => {
    // firebase.uploadFile(this.state.file);
    this.props.onUploadFile(this.state.file, this.state.user.uid);
  };
  componentDidMount() {
    firebase.auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user }, () => {
          this.props.onGetUploadFileData({ uid: this.state.user.uid });
        });
      } else {
        this.setState({ user: null });
      }

      if (this.state.loading) {
        this.setState({ loading: false });
      }
    });
  }
  render() {
    return (
      <div className="home-page p-3">
        <div className="row no-gutters">
          <div className="col-md-4 profile-image">
            <img
              className="w-100"
              src={this.props.uploadFile && this.props.uploadFile.url?this.props.uploadFile.url:image}
            />
            {this.props.uploadFile && this.props.uploadFile.url && <div
              className="del-btn"
              onClick={() =>
                this.props.onDeleteFile({uid:this.state.user && this.state.user.uid})
              }
            >
              <i className="fa fa-times"></i>
            </div>}
          </div>
          <div className="col-md-4 px-2 text-center">
            {this.state.user && this.state.user.email && (
              <h4>Welcome {this.state.user && this.state.user.email}</h4>
            )}
          </div>
          <div className="col-md-4">
            <label className="font-weight-bold">Upload Document </label>
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
                          {this.state.file && this.state.file.name
                            ? this.state.file.name
                            : "Drop a document here or click to select file to upload"}
                        </p>
                      </div>
                    </div>
                  </section>
                );
              }}
            </Dropzone>
            <Button onClick={this.uploadFile} className="mt-2">
              Upload
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onUploadFile: (file, uid) => {
      return dispatch(actions.uploadFile({ file: file, uid: uid }));
    },
    onGetUploadFileData: data => {
      return dispatch(actions.getUploadFileData(data));
    },
    onDeleteFile: data => {
      console.log(data,"gghh")
      return dispatch(actions.deleteFile(data));
    }
  };
};
function mapStateToProps(state) {
  return {
    signUp: state.login.signUp,
    signIn: state.login.signIn,
    uploadFile: state.uploadFile
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
