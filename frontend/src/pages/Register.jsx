import { Link } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";

export default function Register() {
  return (
    <>
      <Link to="/account">Compte utilisateur</Link>
      <RegisterForm />
    </>
  );
}
