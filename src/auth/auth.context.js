import { createContext, useContext, useState } from "react";
import { firebaseConfig } from "../lib/firebase/firebase.config";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import Cookies from "universal-cookie";
import { post } from "../lib/http-functions/post";
import { errorMessage } from "./err-msg";

const cookies = new Cookies();
const loginUrl = "https://project-week-app.herokuapp.com/login";

const ContentContext = createContext({});
export const useAuthContent = () => useContext(ContentContext);

export const ContextProvider = ({ children }) => {
   firebase.initializeApp(firebaseConfig);
   const [_user, setUser] = useState(null);
   const [hasError, setHasError] = useState(false);
   const [errorMsg, setErrorMsg] = useState("");
   const [fbErr, setFbErr] = useState("");

   const setHasErr = (_hasError) => {
      setHasError(_hasError);
   };

   const signIn = async ({ email, password }) => {
      // const email = "123@12111.com";
      // const password = "testTOOMe12221";
      try {
         await firebase.auth().signInWithEmailAndPassword(email, password);
         firebase.auth().onIdTokenChanged(async (user) => {
            const token = await user?.getIdToken();
            cookies.set("token", token, { path: "/" });
            const data = await post(loginUrl, {
               uid: token,
            });
            setUser(data.userData);
         });

         // dashboard
      } catch (error) {
         const err = errorMessage(error);
         setFbErr(err);
      }
   };

   async function signUp({ email, password }) {
      try {
         await firebase.auth().createUserWithEmailAndPassword(email, password);
         firebase.auth().onIdTokenChanged(async (user) => {
            const token = await user?.getIdToken();
            cookies.set("token", token, { path: "/" });
            const data = await post(loginUrl, {
               uid: token,
            });
            setUser(data.userData);
         });
      } catch (error) {
         const err = errorMessage(error);
         setFbErr(err);
      }
   }

   const _setErrorMsg = (_err) => {
      setErrorMsg(_err);
   };

   if (!_user) {
      console.log("hello");
   }

   return (
      <ContentContext.Provider
         value={{
            signIn,
            signUp,
            hasError,
            setHasErr,
            errorMsg,
            _setErrorMsg,
            fbErr,
         }}
      >
         {children}
      </ContentContext.Provider>
   );
};
