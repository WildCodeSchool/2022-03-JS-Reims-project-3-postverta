import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

export default function Register() {
  return (
    <>
      <Link to="/account">Compte utilisateur</Link>
      <LoginForm />
    </>
  );
}
