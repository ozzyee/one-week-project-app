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
       default:
          return null;
    }
 }