import firebase from 'firebase'

const config = {
  databaseURL : 'https://project-3937693125586838531.firebaseio.com/'
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
