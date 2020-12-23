import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA3lgBrzLPpayh7GMQAuNliQdvwGAPj0Lw",
    authDomain: "linkedinclone-ca722.firebaseapp.com",
    projectId: "linkedinclone-ca722",
    storageBucket: "linkedinclone-ca722.appspot.com",
    messagingSenderId: "253467764628",
    appId: "1:253467764628:web:876c6f4296c41ae4421181",
    measurementId: "G-RB9C7K20LW"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()


  export {db, auth};