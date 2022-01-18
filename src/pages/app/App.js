import logo from "./logo.svg";
import "./App.css";
import { useAuthContent } from "../../auth/auth.context";
import { Router } from "../../routes/routes";

function App() {
   const { signIn } = useAuthContent();
   signIn();
   return <Router />;
}

export default App;
