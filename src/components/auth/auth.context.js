import { createContext, useContext } from "react";
import { initializeFirebase } from "../lib/firebase/firebase.config";
import { _signIn } from "./functions/signin";
import { _signUp } from "./functions/signup";

const ContentContext = createContext({});
export const useAuthContent = () => useContext(ContentContext);

export const ContextProvider = ({ children }) => {
   initializeFirebase;

   return (
      <ContentContext.Provider value={{ _signIn, _signUp }}>
         {children}
      </ContentContext.Provider>
   );
};
