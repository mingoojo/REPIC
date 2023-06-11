// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore, Timestamp } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const db = getFirestore(app);
const analytics = getAnalytics(app);
const firebaseApp = getApp();
const appAuth = getAuth();
const appFireStore = getFirestore();
const timeStamp = Timestamp;
const appStorage = getStorage(app);
const db = getFirestore(app);

export {
  appAuth, appFireStore, timeStamp, appStorage, db,
};
