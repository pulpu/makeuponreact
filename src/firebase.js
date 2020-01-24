import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB9TZ9CKt09z_MRE7BEVrZehgDHRNxH4r0",
    authDomain: "makeup-dff28.firebaseapp.com",
    databaseURL: "https://makeup-dff28.firebaseio.com",
    projectId: "makeup-dff28",
    storageBucket: "makeup-dff28.appspot.com",
    messagingSenderId: "856001930610",
    appId: "1:856001930610:web:57624bc5a746961f70e9eb"
};

firebase.initializeApp(config);
export default firebase;
