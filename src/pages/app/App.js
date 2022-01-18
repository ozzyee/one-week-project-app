
import logo from "./logo.svg";
import "./App.css";
import { useAuthContent } from "../../auth/auth.context";
import { Router } from "../../routes/routes";
import Signup from '../../Components/signup/Signup';
import Button from '../../Components/button/Button';

function App() {
   const { signIn } = useAuthContent();
   signIn();
   return <Router />;
}

export default App;
