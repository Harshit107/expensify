import firebase from 'firebase';
import 'firebase/database'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAYOUjSRt-S6BFuK3eTszm8TYbXIYfMj8Q",
    authDomain: "expensify-harshit.firebaseapp.com",
    projectId: "expensify-harshit",
    storageBucket: "expensify-harshit.appspot.com",
    messagingSenderId: "748559585460",
    appId: "1:748559585460:web:374ba2460f0db5daeec7e1",
    measurementId: "G-99Y47ZM3YV"
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
var googleAuthProvider = new firebase.auth.GoogleAuthProvider()
export { firebase, googleAuthProvider, database as default };






//   firebase.analytics();
// firebase.database().ref().set({
//     name: 'Harshit-Keshari.tech'
// })

// firebase.database().ref().on('value', ((dataSnapShot) => {
//     console.log(dataSnapShot.val())
// }));
// setTimeout(() => {
//     firebase.database().ref().off()
// }, 3000)
// setTimeout(() => {
//     firebase.database().ref().update({ 
//         name : 'Golu'
//     })
// }, 6000)

// export default firebase




// //on('child_changed)
// //on('child_removed)
// //on('child_added)
// //on('value)