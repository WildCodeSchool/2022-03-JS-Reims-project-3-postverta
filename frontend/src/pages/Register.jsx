import { Link } from "react-router-dom";

import RegisterForm from "../components/RegisterForm";

import LoginForm from "../components/LoginForm";

export default function Register() {
  return (
    <>
      <Link to="/account">Compte utilisateur</Link>

<RegisterForm />
      <LoginForm />
    </>
  );
}
