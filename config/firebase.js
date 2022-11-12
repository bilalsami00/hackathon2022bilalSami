import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore, collection, addDoc, doc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyApmtLyT7cm8P-bv9dtn7s15bW182CGG6I",
    authDomain: "hackathon-c6045.firebaseapp.com",
    projectId: "hackathon-c6045",
    storageBucket: "hackathon-c6045.appspot.com",
    messagingSenderId: "70192367142",
    appId: "1:70192367142:web:2052339b7bf7818faa48e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// firestore
const db = getFirestore(app);


/////////////////////////////////////////////////////////////////////////////
// SIGN-IN ADMIN
function signInFirebase(email, password){
    return signInWithEmailAndPassword(auth, email, password)
}
////////////////////////////////////////////////////////////////////////////

function createClassroom(courseName){
    return addDoc(collection(db, 'classroom'),{courseName})
}


export{
    signInFirebase,
    createClassroom
}
