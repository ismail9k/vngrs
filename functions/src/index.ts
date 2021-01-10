import * as functions from "firebase-functions";
import * as admin from 'firebase-admin';
import { sanitizeData } from "./utils";

type User = {
  uid: string;
  email?: string;
  emailVerified?: boolean;
  admin?: boolean;
};

admin.initializeApp();
const db = admin.firestore();

export const handleRegisteredUsers = functions.auth.user().onCreate((user) => {
  // Create a shallow copy of user's data
  const userData: User = { ...user };
  const { email } = userData;
  if (email?.includes('@vngrs.com')) {
    userData.admin = true;
  }
  // Sanitize user data
  const userDoc = sanitizeData(['uid', 'email', 'emailVerified', 'admin'], userData);
  // Add the user to firestore
  return db.collection('users').doc(user.uid).set(userDoc);
});

export const getProducts = functions.https.onRequest(async (request, response) => {
  const productsRef = db.collection('products');
  const snapshot = await productsRef.get();
  const output: any[] = [];
  snapshot.forEach(doc => {
    output.push({ id: doc.id, ...doc.data() });
  });
  response.set('Content-Type', 'application/json');
  response.send({ products: output });
});
