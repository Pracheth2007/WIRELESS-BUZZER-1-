import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyA-Q7-i9xfkhWaYdq3kas_-nm43dNHS1l4',
  authDomain: 'wireless-buzzer-d8d74.firebaseapp.com',
  databaseURL: 'https://wireless-buzzer-d8d74.firebaseio.com',
  projectId: 'wireless-buzzer-d8d74',
  storageBucket: 'wireless-buzzer-d8d74.appspot.com',
  messagingSenderId: '1001345780595',
  appId: '1:1001345780595:web:4c69aef280a7cbd9249306',
  measurementId: 'G-HCKK1SL6ED',
};

  firebase.initializeApp(firebaseConfig);

  export default firebase.database();