import Firebase from 'firebase/compat/app';
//import 'firebase/firestore';
import 'firebase/compat/firestore';
//import 'firebase/auth';
import 'firebase/compat/auth';

// here I want to import the seed file
//import { seedDatabase } from '../seed';


const config = {
    apiKey: "AIzaSyB3rPA325wuwj_pSvv6W1d_TYChGXA4Afw",
    authDomain: "instagram-aadca.firebaseapp.com",
    projectId: "instagram-aadca",
    storageBucket: "instagram-aadca.appspot.com",
    messagingSenderId: "1019293233703",
    appId: "1:1019293233703:web:f5466aff9ee2b68e1ed402"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here is where I want to call the seed file (ONLY ONCE!)
//seedDatabase(firebase);

export { firebase, FieldValue };