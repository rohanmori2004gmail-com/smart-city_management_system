import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import application from "./firebaseConfig";

const db = getFirestore(application);

// Add a document
await addDoc(collection(db, "contacts"), { name: "John", age: 28 });

// Get all documents
const querySnapshot = await getDocs(collection(db, "contacts"));
querySnapshot.forEach(doc => {
  console.log(doc.id, doc.data());
});