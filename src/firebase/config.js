import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'
import {getAuth} from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyAhh6ClY2XQGyzcRWTOriRiUeq45zvT7CU",
    authDomain: "sahibindenclone-ae86e.firebaseapp.com",
    projectId: "sahibindenclone-ae86e",
    storageBucket: "sahibindenclone-ae86e.appspot.com",
    messagingSenderId: "100881990150",
    appId: "1:100881990150:web:9ed2480edb87f735107987"
  };


initializeApp(firebaseConfig)
const db = getFirestore()
const auth = getAuth()
export {db,auth}