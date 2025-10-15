
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDjCMvfHBOzzlv52ghLeZoCQLXU1iqZCZE",
    authDomain: "authentication-app-d2bd9.firebaseapp.com",
    projectId: "authentication-app-d2bd9",
    storageBucket: "authentication-app-d2bd9.firebasestorage.app",
    messagingSenderId: "882307796629",
    appId: "1:882307796629:web:bc56de14204c88a60d959c",
    measurementId: "G-91F5CLLSWE"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
