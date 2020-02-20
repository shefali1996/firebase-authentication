import app from "firebase/app";
import "firebase/auth";
import "firebase/storage";
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};
// const storage = app.storage()

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.storageRef = app.storage().ref();
  }
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  doSignOut = () => this.auth.signOut();
  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
  uploadFile = (file, uid) => {
    console.log(file, uid, "iddddd");
    // Create the file metadata
    var metadata = {
      contentType: "image/jpeg"
    };

    // Upload file and metadata to the object 'images/mountains.jpg'
    var uploadTask = this.storageRef.child(`images/${uid}`).put(file, metadata);
    return uploadTask;
    /*
    uploadTask.on(
      app.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      function(snapshot) {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case app.storage.TaskState.PAUSED: // or 'paused'
            console.log("Upload is paused");
            break;
          case app.storage.TaskState.RUNNING: // or 'running'
            console.log("Upload is running");
            break;
        }
      },
      function(error) {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;

          case "storage/canceled":
            // User canceled the upload
            break;

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      function() {
        // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          console.log("File available at", downloadURL);
        });
      }
    );*/
    // Listen for state changes, errors, and completion of the upload.
  };
  getUploadFileData = uid =>
    this.storageRef.child(`images/${uid}`).getDownloadURL();

  deleteFile = (uid) => {
    console.log(uid,"uid")
    var desertRef = this.storageRef.child(`images/${uid}`);

    // Delete the file
    desertRef
      .delete()
      .then(function(res) {
        console.log(res,"vvvvv")
        // File deleted successfully
      })
      .catch(function(error) {
        // Uh-oh, an error occurred!
      });
  };
}
export default Firebase;
