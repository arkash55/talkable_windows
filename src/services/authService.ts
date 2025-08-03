// src/services/auth.ts
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "firebaseConfig";





export async function signUpUser(email: string, password: string) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User signed up:", user.email, "UID:", user.uid);
    return user;
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') {
      console.error("The email address is already in use.");
    } else if (error.code === 'auth/invalid-email') {
      console.error("The email address is invalid.");
    } else if (error.code === 'auth/weak-password') {
      console.error("The password is too weak.");
    } else {
      console.error("Signup error:", error.message);
    }
    throw error;
  }
}




export async function signInUser(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    // Signed in successfully
    const user = userCredential.user;
    console.log("User signed in:", user.email, "UID:", user.uid);
    // Redirect or update UI
    return user;
  } catch (error: any) {
    // Handle specific errors
    if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
      console.error("Invalid email or password.");
    } else if (error.code === 'auth/invalid-email') {
      console.error("The email address is not valid.");
    } else {
      console.error("Error signing in:", error.message);
    }
    throw error;
  }
}



export async function signOutUser() {
  try {
    await signOut(auth);
    console.log("User signed out successfully.");
    // Redirect to login page or update UI
  } catch (error) {
    console.error("Error signing out:", error);
  }
}
