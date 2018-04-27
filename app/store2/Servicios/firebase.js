import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCyWIIBZoU6_0PIK9VCTz2AjV7oSE-tvg8',
  authDomain: 'clone-instagram-4362f.firebaseapp.com',
  databaseURL: 'https://clone-instagram-4362f.firebaseio.com',
  projectId: 'clone-instagram-4362f',
  storageBucket: 'clone-instagram-4362f.appspot.com',
  messagingSenderId: '13758925463'
};

firebase.initializeApp(config);


export const autenticacion = firebase.auth();
export const baseDeDatos = firebase.database();
