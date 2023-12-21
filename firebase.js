const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

const serviceAccount = require("./keys/crafty-media-firebase-adminsdk.json");

initializeApp({
  credential: cert(serviceAccount),
});

export const db = getFirestore();
