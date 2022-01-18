import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { post } from "../../lib/http-functions/post";

export async function _signUp() {
   const email = "123@12111.com";
   const password = "testTOOMe12221";

   try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);

      firebase.auth().onIdTokenChanged(async (user) => {
         const token = await user?.getIdToken();
         await post("/api/signin", { token });

         console.log("this is the token", token);

         //  window.location.href = "/";
      });
   } catch (error) {
      console.log(error);
   }
}
