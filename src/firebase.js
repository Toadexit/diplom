
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAabzsHjcb2vcawqHhceqtHu9ikO-LtEew",
  authDomain: "service-6d7c8.firebaseapp.com",
  projectId: "service-6d7c8",
  storageBucket: "service-6d7c8.appspot.com",
  messagingSenderId: "68597732145",
  appId: "1:68597732145:web:cce23814f3d711cb171610"
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)