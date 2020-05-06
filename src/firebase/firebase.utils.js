import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyCeM80c883DdrVT7XD8IA-b1QB_pONjITI",
    authDomain: "cartlog-8b4a9.firebaseapp.com",
    databaseURL: "https://cartlog-8b4a9.firebaseio.com",
    projectId: "cartlog-8b4a9",
    storageBucket: "cartlog-8b4a9.appspot.com",
    messagingSenderId: "400967649651",
    appId: "1:400967649651:web:fb7d55e2e20112724e9d06",
    measurementId: "G-1X73Z3DVHE"
}

firebase.initializeApp(config)

export const auth = firebase.auth()

export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)


export default firebase