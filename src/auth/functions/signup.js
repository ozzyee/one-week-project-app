import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export async function _signUp() {
   const email = "123@12111.com";
   const password = "testTOOMe12221";

   try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);

      firebase.auth().onIdTokenChanged(async (user) => {
         const token = await user?.getIdToken();
         cookies.set("token", token, { path: "/" });
      });
   } catch (error) {
      console.log(error);
   }
}
