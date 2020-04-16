const admin = require('firebase-admin');

const serviceAccount = require('./adminService.json');


const adminAuth = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://recruitment-app-d596c.firebaseio.com"
  });

export default adminAuth;
