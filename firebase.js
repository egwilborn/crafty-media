const { initializeApp, cert, getApps } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

const serviceAccount = require("./keys/crafty-media-firebase-adminsdk.json");

if (getApps().length < 1) {
  initializeApp({
    credential: cert(serviceAccount),
  });
}

export const db = getFirestore();
