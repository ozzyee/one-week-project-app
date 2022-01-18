import { createContext, useContext, useState } from "react";
import { firebaseConfig } from "../lib/firebase/firebase.config";
// import { firebaseAdmin } from "../lib/firebase/firebasde.admin";

import { _signUp } from "./functions/signup";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const ContentContext = createContext({});
export const useAuthContent = () => useContext(ContentContext);

export const ContextProvider = ({ children }) => {
   firebase.initializeApp(firebaseConfig);
   const [_user, setUser] = useState({});

   const signIn = async () => {
      const email = "123@12111.com";
      const password = "testTOOMe12221";

      try {
         await firebase.auth().signInWithEmailAndPassword(email, password);

         firebase.auth().onIdTokenChanged(async (user) => {
            const token = await user?.getIdToken();
            cookies.set("token", token, { path: "/" });
         });
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <ContentContext.Provider value={{ signIn, _signUp }}>
         {children}
      </ContentContext.Provider>
   );
};
