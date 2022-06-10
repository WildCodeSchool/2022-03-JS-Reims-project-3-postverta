import { Link } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";
import logoBlack from "../assets/img/logo-black.jpg";

export default function Register() {
  return (
    <div className="bg-black text-white">
      <img src={logoBlack} alt="logo" />
      <Link to="/account">Compte utilisateur</Link>
      <RegisterForm />
      <LoginForm />
    </div>
  );
}
