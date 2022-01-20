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
const loginUrl = "https://project-week-app.herokuapp.com/login";
const ContentContext = createContext({});

export const useAuthContent = () => useContext(ContentContext);

console.log("AUTH IS CALLED!!!!!!");

export const ContextProvider = ({ children }) => {
   const _cookie = cookies.get("token");

   firebase.initializeApp(firebaseConfig);
   const history = useNavigate();
   // const [userData, setUserData] = useState({});
   const [_user, setUser] = useState(null);
   const [hasError, setHasError] = useState(false);
   const [errorMsg, setErrorMsg] = useState("");
   const [fbErr, setFbErr] = useState("");

   const [authenticated, setAuthenticated] = useState(null);
   const [loading, setLoading] = useState(true);

   const [signupStage, setSignupStage] = useState(false);

   const setHasErr = (_hasError) => {
      setHasError(_hasError);
   };

   useEffect(() => {}, []);

   const signIn = async ({ email, password }) => {
      // const email = "123@12111.com";
      // const password = "testTOOMe12221";
      try {
         await firebase.auth().signInWithEmailAndPassword(email, password);
         firebase.auth().onIdTokenChanged(async (user) => {
            const token = await user?.getIdToken();
            cookies.set("token", token, { path: "/" });
            await post(loginUrl, {
               uid: token,
            });

            setAuthenticated(true);
            history("/dashboard");
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

            console.log(data);

            setAuthenticated(true);
            setSignupStage(true);
            history("/details");
         });
      } catch (error) {
         const err = errorMessage(error);
         setFbErr(err);
      }
   }

   const _setErrorMsg = (_err) => {
      setErrorMsg(_err);
   };

   const setUserInMemory = async () => {
      const data = await post(loginUrl, {
         uid: _cookie,
      });

      if (data.err) {
         cookies.set("token", "");
      }
      setUser(data.userData);

      // redirect

      const user = await getData(
         `https://project-week-app.herokuapp.com/users/${data.userData.uid}`
      );

      const USER_DATA = user[0];
      console.log("=> > =>");
      console.log("=> > =>", USER_DATA.bootcmperid);
      const currentUrl = window.location.href.split("/")[3];
      const idUrl = window.location.href.split("/")[4];

      console.log(idUrl.length);

      if (user.length === 0) {
         history("/details");
         console.log("NO DATA");
      }
   };

   useEffect(() => {
      if (_user) setAuthenticated(true);

      if (!_user && _cookie) {
         setUserInMemory();
      } else {
         setLoading(false);
      }
   }, [_cookie, _user]);

   if (loading) return <h1>loading... all</h1>;

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
            signupStage,
         }}
      >
         {children}
      </ContentContext.Provider>
   );
};
