import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey:import.meta.env.VITE_APIKEY,
  authDomain:import.meta.env.VITE_AUTHDOMAIN,
  projectId:import.meta.env.VITE_PROJECTID,
  storageBucket:import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
  appId:import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);



// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBA1MbaBKg6shsz656nVJzEhnpdz3xZ6CA",
//   authDomain: "job-task-1-2c854.firebaseapp.com",
//   projectId: "job-task-1-2c854",
//   storageBucket: "job-task-1-2c854.appspot.com",
//   messagingSenderId: "250254288260",
//   appId: "1:250254288260:web:9b02bbbee96db2e0e229d1"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export  const auth = getAuth(app);