import * as firebase from 'firebase';
import {firebaseConfig} from './FireBaseConfig';
import 'firebase/auth';



  export const db = firebase.initializeApp(firebaseConfig);
  
  export const data = firebase.database().ref('data');
