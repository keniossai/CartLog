import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyBTQBe9I9oIfiR6LUJspRYDBrrFfypOhpI",
    authDomain: "cartlog-9d3b4.firebaseapp.com",
    databaseURL: "https://cartlog-9d3b4.firebaseio.com",
    projectId: "cartlog-9d3b4",
    storageBucket: "cartlog-9d3b4.appspot.com",
    messagingSenderId: "795079832546",
    appId: "1:795079832546:web:8ce26a9be19b209ea0ffbb",
    measurementId: "G-PWKZHHVS56"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return
    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if(!snapShot.exists) {
        const {displayName, email} = userAuth

        const createdAt = new Date()

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error){
            console.log('error creating user', error.message)
        }
    }
    return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()

export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)


export default firebase