/* eslint-disable eqeqeq */
export const errorMessage = (error) => {
   if (
      error ==
      "FirebaseError: Firebase: The password is invalid or the user does not have a password. (auth/wrong-password)."
   ) {
      return "Wrong Password";
   }

   if (
      error ==
      "FirebaseError: Firebase: The email address is badly formatted. (auth/invalid-email)."
   ) {
      return "The email address is badly formatted";
   }

   if (
      error ==
      "FirebaseError: Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found)."
   ) {
      return "There is no user corresponding with these details";
   }

   if (
      error ==
      "FirebaseError: Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests)."
   ) {
      return "you account has been temporarily disabled due to too many failed logins";
   }else{
      return "an error ocurred we are very sorry"
   }
};
