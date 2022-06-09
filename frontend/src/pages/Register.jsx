import { Link } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";

export default function Register() {
  return (
    <div className="bg-black text-white">
      <img src="../../src/assets/img/logo-black.jpg" alt="logo" />
      <Link to="/account">Compte utilisateur</Link>
      <RegisterForm />
    </div>
  );
}
