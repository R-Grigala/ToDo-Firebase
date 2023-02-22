import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCuS83z6913IOyky8aqn14NQvABQQxA_Tw",
    authDomain: "fir-todo-a2e1f.firebaseapp.com",
    projectId: "fir-todo-a2e1f",
    storageBucket: "fir-todo-a2e1f.appspot.com",
    messagingSenderId: "187601473149",
    appId: "1:187601473149:web:10596f17c09f4dbd142b14",
    measurementId: "G-JDQ3PSXV9V"
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export { firebase };