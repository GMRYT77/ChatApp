import "@/styles/globals.css";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useEffect, useState } from "react";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBZlgcVWwaZdBCWmJXivueQPp2Su9Bdtt0",
  authDomain: "chatapp-dev-104df.firebaseapp.com",
  projectId: "chatapp-dev-104df",
  storageBucket: "chatapp-dev-104df.appspot.com",
  messagingSenderId: "292487483593",
  appId: "1:292487483593:web:8ace3f298a8acde21c7d18",
};

// Initialize firebase and google provider
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

// Sign in and sign out functins
const signIn = () => auth.signInWithPopup(provider);
const signOut = () => auth.signOut();

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      setUser(user);
    });
  }, [user]);

  useEffect(() => {
    const html = document.getElementById("html");
    if (localStorage.getItem("DM") === "dark") {
      html.classList.add("dark");
    } else if (localStorage.getItem("DM") === "light") {
      html.classList.remove("dark");
    }
  }, []);

  return (
    <Component {...pageProps} user={user} signIn={signIn} signOut={signOut} />
  );
}
export default MyApp;
