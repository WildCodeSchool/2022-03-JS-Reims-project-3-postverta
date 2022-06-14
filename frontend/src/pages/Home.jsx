import { Link } from "react-router-dom";
import logoBlack from "../assets/img/logo-black.jpg";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center ">
      <h1 className="text-7xl  ">Postverta</h1>
      <img src={logoBlack} alt="logo" className="m-3" />

      <Link
        to="/login"
        className="btn btn-primary border rounded-lg m-5 px-32 py-2"
      >
        Connexion
      </Link>
      <Link
        to="/register"
        className="btn btn-primary border rounded-lg m-5 px-32 py-2 "
      >
        Inscription
      </Link>
    </div>
  );
}
