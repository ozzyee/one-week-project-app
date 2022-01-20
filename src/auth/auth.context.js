/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useState, useEffect } from "react";
import { firebaseConfig } from "../lib/firebase/firebase.config";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import Cookies from "universal-cookie";
import { post } from "../lib/http-functions/post";
import { errorMessage } from "./err-msg";
import { useNavigate } from "react-router-dom";
import { getData } from "../lib/http-functions/get";

const cookies = new Cookies();
const ContentContext = createContext({});

export const useAuthContent = () => useContext(ContentContext);

const userObjectData = async (uid) => {
   const userUrl = `https://project-week-app.herokuapp.com/users/${uid}`;
   const userData = await getData(userUrl);
   return userData;
};

export const ContextProvider = ({ children }) => {
   firebase.initializeApp(firebaseConfig);
   const history = useNavigate();
   const [loading, setLoading] = useState(true);
   const [componentMounted, setComponentMounted] = useState(false);

   // ERROR STATE
   const [hasError, setHasError] = useState(false);
   const [errorMsg, setErrorMsg] = useState("");
   const [fbErr, setFbErr] = useState("");

   // USER STATE
   const [userObject, setUserObject] = useState({});
   const [_user, setUser] = useState(null);
   const uid = _user?.uid;

   // AUTHENTICATED STATE
   const [authenticated, setAuthenticated] = useState(false);

   // CURRENT url
   const currentUrl = window.location.href.split("/")[3];

   const setHasErr = (_hasError) => {
      setHasError(_hasError);
   };

   useEffect(() => {
      (async () => {
         if (uid) {
            if (!userObject) {
               setUserObject(await userObjectData(uid));
            }
         }
      })();
   }, [_user, currentUrl]);

   useEffect(() => {
      return firebase.auth().onIdTokenChanged(async (user) => {
         if (!user) {
            setAuthenticated(false);

            setLoading(false);
            setUser(null);
            cookies.set("token", "", { path: "/" });
            return;
         }
         if (!user && currentUrl !== "signup") {
            history("/");
         }

         const token = await user.getIdToken();
         setUser(user);
         cookies.set("token", token, { path: "/" });
         setComponentMounted(true);
      });
   }, [userObject]);

   useEffect(() => {
      (async () => {
         if (uid) {
            const user = await userObjectData(uid);
            setUserObject(user);
            user && setAuthenticated(true);

            if (
               !user[0].cohort &&
               !user[0].bootcamperid &&
               !user[0].displayname
            ) {
               console.log("NO DATA");
               history("/details");
               setLoading(false);
            } else if (user) {
               setLoading(false);
            }

            if (
               user[0].cohort &&
               user[0].bootcamperid &&
               user[0].displayname &&
               currentUrl === "details"
            ) {
               history("/dashboard");
            }

            if (!currentUrl && user) {
               history("/dashboard");
            } else if (currentUrl === "signup" && user) {
               history("/dashboard");
            }
         }
      })();
   }, [componentMounted]);

   const signIn = async ({ email, password }) => {
      try {
         await firebase.auth().signInWithEmailAndPassword(email, password);
         setAuthenticated(true);
      } catch (error) {
         const err = errorMessage(error);
         setFbErr(err);
      }
   };

   async function signUp({ email, password }) {
      try {
         await firebase.auth().createUserWithEmailAndPassword(email, password);
         history("/details");
         setAuthenticated(true);
      } catch (error) {
         const err = errorMessage(error);
         setFbErr(err);
      }
   }

   const _setErrorMsg = (_err) => {
      setErrorMsg(_err);
   };

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
            authenticated,
            _user,
            // userData,
         }}
      >
         {children}
      </ContentContext.Provider>
   );
};
