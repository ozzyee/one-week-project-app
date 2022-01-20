export default function reducer(state, action) {
   const hasErr = true;
   switch (action.type) {
      case "no_email_password":
         return {
            email: hasErr,
            password: hasErr,
         };
      case "no_email":
         return {
            email: hasErr,
         };
      case "no_password":
         return {
            password: hasErr,
         };
      case "no_email_password_confirm":
         return {
            email: hasErr,
            password: hasErr,
            confirmPassword: hasErr,
         };
      case "passwords_no_match":
         return {
            password: hasErr,
            confirmPassword: hasErr,
         };

      case "wong_order_password":
         return {
            email: hasErr,
            confirmPassword: hasErr,
         };

      default:
         return null;
   }
}
