import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initilaztionAuthintication from "../Firebase/FirebaseInit";

initilaztionAuthintication();
const useFirebase = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, SetUser] = useState({});
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const userEmail = (e) => {
    setEmail(e.target.value);
  };
  const userPassword = (e) => {
    setPassword(e.target.value);
  };
  const regesterForm = (e) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        SetUser(user)
        // ...
      })
      .catch((error) => {
        setError(error.message);
        // ..
      });
    e.preventDefault();
  };
  const loginForm = (e) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        SetUser(user);
        console.log(user);
        // ...
      })
      .catch((error) => {
        setError(error.message);
      });
    e.preventDefault();
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        SetUser(user);
      } else {
        SetUser({});
      }
    });
  }, []);
  const signOutInGoogle = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out sussesfully");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return {
    signInWithGoogle,
    error,
    signOutInGoogle,
    user,
    userEmail,
    userPassword,
    loginForm,
    regesterForm
  };
};

export default useFirebase;
