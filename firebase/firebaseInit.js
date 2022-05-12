import { initializeApp, getApps } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: process.env.api_key,
  authDomain: process.env.auth_domain,
  databaseURL: process.env.database_dRL,
  projectId: process.env.project_id,
  storageBucket: process.env.storage_bucket,
  messagingSenderId: process.env.messaging_sender_id,
  appId: process.env.app_id,
  measurementId: process.env.measurement_id,
}

let firebaseApp
let firebaseDb

if (getApps().length < 1) {
  firebaseApp = initializeApp(firebaseConfig)
  firebaseDb = getDatabase(firebaseApp)
}

export { firebaseDb, firebaseConfig }
