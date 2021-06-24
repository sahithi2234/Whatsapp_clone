import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyC1EP-FxJbkJI7kZXrwJK3GjxT8IZvv92Y",
    authDomain: "todoapp-962c0.firebaseapp.com",
    projectId: "todoapp-962c0",
    storageBucket: "todoapp-962c0.appspot.com",
    messagingSenderId: "1084405547158",
    appId: "1:1084405547158:web:c31f3ad62a53be2c53c2b7",
    measurementId: "G-VQ86J0SDE0"
  };
  const firebaseApp = firebase.apps && firebase.apps.length > 0 ? firebase.apps[0] : firebase.initializeApp(config)
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider =new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
