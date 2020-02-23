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
    var metadata = {
      contentType: "image/jpeg"
    };

    // Upload file and metadata to the object 'images/mountains.jpg'
    var uploadTask = this.storageRef.child(`images/${uid}`).put(file, metadata);
    return uploadTask;
  };
  getUploadFileData = uid =>
    this.storageRef.child(`images/${uid}`).getDownloadURL();

  deleteFile = (uid) => {
    console.log(uid,"uid")
    var desertRef = this.storageRef.child(`images/${uid}`);

    // Delete the file
    desertRef
      .delete()
  };
}
export default Firebase;
