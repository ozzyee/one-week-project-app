import "./App.css";
import { Router } from "../../routes/routes";
import CustomizedSnackbars from "../../Components/snackbar/snackbar";
import { useAuthContent } from "../../auth/auth.context";

function App() {
   const { hasError } = useAuthContent();
   console.log(hasError);
   return (
      <>
         <CustomizedSnackbars status={hasError} />
         <Router />
      </>
   );
}

export default App;
