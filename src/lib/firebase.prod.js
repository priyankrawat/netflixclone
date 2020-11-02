import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyCcn0wbjVIN2IYomvzYkxe9z58Q_QVp82Y",
  authDomain: "netflix-3f98d.firebaseapp.com",
  databaseURL: "https://netflix-3f98d.firebaseio.com",
  projectId: "netflix-3f98d",
  storageBucket: "netflix-3f98d.appspot.com",
  messagingSenderId: "1006607263369",
  appId: "1:1006607263369:web:c43ba04ff9250b29e80858"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
