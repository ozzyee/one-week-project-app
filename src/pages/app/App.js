import "./App.css";
import { Router } from "../../routes/routes";
import CustomizedSnackbars from "../../Components/snackbar/snackbar";
import { useAuthContent } from "../../auth/auth.context";

function App() {
   const { hasError } = useAuthContent();

   return (
      <>
         <CustomizedSnackbars status={hasError} />
         <Router />
      </>
   );
}

export default App;
