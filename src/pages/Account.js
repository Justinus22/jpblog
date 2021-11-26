import { useContext } from "react"
import { getDatabase, ref, set} from "firebase/database";

import app from "../firebase/initfirebase.js"
import { AuthContext } from "../context/Auth"

import LogIn from "./account/LogIn"
import InAccount from "./account/InAccount"

function Account() {
  const {currentUser} = useContext(AuthContext);


  if(currentUser){
    return (
      <InAccount />
    );
  }

  return (
    <LogIn />
  );
}

export default Account;
