import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../../App";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        //   storeAuthToken();
        history.replace(from);
      })
      .catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  //   const storeAuthToken = () => {
  //     firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
  //       .then(function (idToken) {
  //         sessionStorage.setItem('token', idToken);
  //         history.replace(from);
  //       }).catch(function (error) {
  //         // Handle error
  //       });
  //   }

  return (
    <div className="container">
      <div
        className="row align-items-center text-center"
        style={{ height: "70vh" }}
      >
        <h1>Login</h1>
        <div>
          <button className="btn btn-dark" onClick={handleGoogleSignIn}>
            Google Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
