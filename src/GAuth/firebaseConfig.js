// src/firebaseConfig.js
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import googleLogo from "../assets/images/google-logo-icon-png-transparent-background-osteopathy-16.png";
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyDJgMNYagg_e9kFNHqrADC4UkcH9gqognc",
  authDomain: "authentication-eac73.firebaseapp.com",
  projectId: "authentication-eac73",
  storageBucket: "authentication-eac73.appspot.com",
  messagingSenderId: "351634211213",
  appId: "1:351634211213:web:5996b1d587f0d7a0f13dc4",
  measurementId: "G-9XM3DLCXQ2",
};

firebase.initializeApp(firebaseConfig);

const GoogleLogin = () => {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    try {
      // await firebase.auth().signInWithPopup(provider);
      // console.log("Provider",provider);
      // User is signed in, redirect or do something else

      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          // console.log("result", result?.additionalUserInfo?.profile?.email);
          console.log("result", result);
          localStorage.setItem("GoogleAuth", result?.credential?.idToken);
          localStorage.setItem(
            "ProfileData",
            JSON.stringify(result?.additionalUserInfo?.profile)
          );
          navigate("/");
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  // const signOut = async () => {
  //     try {
  //         await firebase.auth().signOut();
  //         // User is signed out, update UI accordingly
  //     } catch (error) {
  //         console.error("Error during sign-out:", error);
  //     }
  // };

  return (
    <div>
      <div className="google-logo d-flex justify-content-center py-3">
      <h1 className="header">Login</h1>
        <img
          src={googleLogo}
          className="logo cursor-pointer"
          onClick={signInWithGoogle}
          alt="google"
        />
      </div>
      {/* <button onClick={signInWithGoogle}>Sign in with Google</button> */}
      {/* <button onClick={signOut}>Sign out</button> */}
    </div>
  );
};

export default GoogleLogin;
