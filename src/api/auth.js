import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";

export default class RSAuth {
  constructor() {
    this.auth = auth;
    this.provider = new GoogleAuthProvider();
    // this.token;
  }

  loginWithGoogle() {
    signInWithPopup(this.auth, this.provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // this.token = credential.accessToken;
        // The signed-in user info.
        return result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential);
        // ...
      });
  }

  logout() {
    this.auth
      .signOut()
      .then(() => {
        return "성공적으로 로그아웃 되었습니다.";
      })
      .catch((error) => {
        return error;
      });
  }

  withdrawal() {}
}
