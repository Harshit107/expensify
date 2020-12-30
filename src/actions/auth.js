import { firebase, googleAuthProvider } from '../firebase/firebase'

export const login = (uid) => ({
    type: 'LOGIN',
    uid
})

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider).then((user) => {
            console.log(user)
        }).catch(err => {
            console.log(err);
        })
    };
};
export const logout = () => ({
    type: 'LOGOUT',
})


export const startLogout = (props) => {
    return () => {
        return firebase.auth().signOut().then(() => {
            
        }).catch(err => {
            console.log(err);
        })
    }
}