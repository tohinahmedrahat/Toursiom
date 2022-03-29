import { initializeApp } from "firebase/app";
import firebaseConfig from "./FriebaseConfig"

const initilaztionAuthintication = () =>{
    initializeApp(firebaseConfig)
}

export default initilaztionAuthintication;