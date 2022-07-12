import { useNavigate } from "react-router-dom";
import { useUserData } from "../context/UserDataContext";

export default function UserProfil() {
  const { userData } = useUserData();
  const navigate = useNavigate();

  return (
    <div
      className="font-['Sansita-Regular'] bg-[url('./assets/img/dream-account.jpg')] bg-no-repeat bg-cover bg-gray-500 bg-blend-darken flex justify-center 
    flex-col"
    >
      <p className="bg-white bg-opacity-70 text-center m-5 text-3xl">
        Mon compte
      </p>
      <p className="bg-white bg-opacity-70 text-center m-5 text-xl">
        Informations :
      </p>
      <ul className="bg-white bg-opacity-70 m-5">
        <li className="m-1">Nom : {userData.name}</li>
        <li className="m-1">Mail : {userData.email}</li>
        <li className="m-1">Pseudo : {userData.pseudo}</li>
        <li className="m-1">
          Date de naissance :
          {new Intl.DateTimeFormat("fr-FR", {
            year: "numeric",
            month: "long",
            day: "2-digit",
          }).format(new Date(userData.birthdate))}
        </li>
        <li className="m-1">Genre : {userData.gender}</li>
      </ul>
      <a
        href="/"
        className="bg-white m-5 mt-20 text-base text-center px-10 py-2 border rounded-lg active:bg-black active:text-white"
      >
        Déconnexion
      </a>
      <button
        onClick={() => {
          navigate("/");
        }}
        type="button"
        className="bg-red-700 m-5 mt-20 text-white text-base text-center px-10 py-2 border rounded-lg active:bg-black active:text-white"
      >
        Supprimer le compte
      </button>
    </div>
  );
}
