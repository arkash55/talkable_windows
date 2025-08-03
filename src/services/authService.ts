import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { auth } from '../../firebaseConfig'



export async function signUpUser(email: string, password: string): Promise<User> {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User signed up:", user.email, "UID:", user.uid);
    return user;
  } catch (error) {
    const err = error as FirebaseError;

    switch (err.code) {
      case 'auth/email-already-in-use':
        console.error("The email address is already in use.");
        break;
      case 'auth/invalid-email':
        console.error("The email address is invalid.");
        break;
      case 'auth/weak-password':
        console.error("The password is too weak.");
        break;
      default:
        console.error("Signup error:", err.message);
    }

    throw err;
  }
}



export async function signInUser(email: string, password: string): Promise<User> {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User signed in:", user.email, "UID:", user.uid);
    return user;
  } catch (error) {
    const err = error as FirebaseError;

    switch (err.code) {
      case 'auth/user-not-found':
      case 'auth/wrong-password':
        console.error("Invalid email or password.");
        break;
      case 'auth/invalid-email':
        console.error("The email address is not valid.");
        break;
      default:
        console.error("Error signing in:", err.message);
    }

    throw err;
  }
}



export async function signOutUser(): Promise<void> {
  try {
    await signOut(auth);
    console.log("User signed out successfully.");
  } catch (error) {
    console.error("Error signing out:", error);
  }
}
