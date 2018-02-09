import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyB-UDNAIrQ-fpMnD-v1xWXQSRljYRqNGrA",
    authDomain: "friendbush-6efa0.firebaseapp.com",
    databaseURL: "https://friendbush-6efa0.firebaseio.com",
    projectId: "friendbush-6efa0",
    storageBucket: "friendbush-6efa0.appspot.com",
    messagingSenderId: "772633034984"
};

firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
