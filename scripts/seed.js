import firebase from 'firebase';

import data from '../src/data/db.json';

// Initialize Cloud Firestore through Firebase

firebase.initializeApp({
  projectId: 'vngrs-c5a55',
  databaseURL: 'http://localhost:9000?ns=emulatorui',
});

const db = firebase.firestore();

data.products.forEach((product) => {
  db.collection('products')
    .add(product)
    .then(function (docRef) {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch(function (error) {
      console.error('Error adding document: ', error);
    });
});
