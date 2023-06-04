// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD-3_zP-ewR3213Au7Nw4zO_pzjy32PYSA',
  authDomain: 'project-study-mingoojo.firebaseapp.com',
  projectId: 'project-study-mingoojo',
  storageBucket: 'project-study-mingoojo.appspot.com',
  messagingSenderId: '439881703146',
  appId: '1:439881703146:web:d03eed7c96d3d2f5334193',
  measurementId: 'G-MTHZ9NP4H5',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const appAuth = getAuth();
const appfireStore = getFirestore();

export { appAuth, appfireStore };
