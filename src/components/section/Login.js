import React, { Component } from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from "../../firebaseConfig";
import "../css/Login.css";
import "../css/Payments.css";
import GoogleLogo from "../svg/google.svg"

const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component {
  render() {
    const { user, signOut, signInWithGoogle } = this.props;

    return (
      <div className="div">
        {user ? (
          <h3>¡Hola {user.displayName}!</h3>
        ) : (
          <h3>Por favor, inicia sesión.</h3>
        )}

        {user ? (
          <button onClick={signOut}>Cerrar sesión</button>
        ) : (
          <button onClick={signInWithGoogle}><img src={GoogleLogo} alt="Google Logo"/></button>
        )}
      </div>
    );
  }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Login);
