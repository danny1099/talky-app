import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { FIREBASE_API_KEY, FIREBASE_APP_ID, FIREBASE_SENDER_ID } from '@/config/env'

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: 'talky-app-2d180.firebaseapp.com',
  projectId: 'talky-app-2d180',
  storageBucket: 'talky-app-2d180.appspot.com',
  messagingSenderId: FIREBASE_SENDER_ID,
  appId: FIREBASE_APP_ID
}

const appFirebase = initializeApp(firebaseConfig)
export const db = getFirestore(appFirebase)
export const storage = getStorage(appFirebase)
