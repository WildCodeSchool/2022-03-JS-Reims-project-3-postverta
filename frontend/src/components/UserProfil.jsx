import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useUserData } from "../context/UserDataContext";

export default function UserProfil() {
  function submitForm(event) {
    event.preventDefault();
  }
  const { userData } = useUserData();
  const navigate = useNavigate();
  const genderRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();

  return (
    <form
      className="font-['Sansita-Regular'] bg-[url('./assets/img/dream-account.jpg')] bg-no-repeat bg-cover bg-gray-500 bg-blend-darken flex justify-center 
      flex-col"
      onSubmit={submitForm}
    >
      <h2 className="bg-white bg-opacity-70 text-center m-5 text-3xl">
        Mon Compte
      </h2>
      <p className="bg-white bg-opacity-70 text-center m-5 text-xl">
        Informations :
      </p>
      <label htmlFor="name" className="mb-4">
        Nom :
      </label>
      <input
        ref={nameRef}
        id="name"
        type="text"
        name="name"
        className="w-3/4 h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-300 border rounded-lg focus:shadow-outline"
        placeholder={userData.name}
        required="required"
      />
      <label htmlFor="lastname" className="bg-white bg-opacity-70 m-5">
        Mail
      </label>
      <ul>
        <li className="m-1">{userData.email}</li>
      </ul>
      <label htmlFor="lastname" className="bg-white bg-opacity-70 m-5">
        Pseudo
      </label>
      <input
        id="lastname"
        type="text"
        name="lastname"
        className="m-1"
        placeholder={userData.pseudo}
      />
      <ul>
        <li className="m-1">
          Date de naissance :
          {new Intl.DateTimeFormat("fr-FR", {
            year: "numeric",
            month: "long",
            day: "2-digit",
          }).format(new Date(userData.birthdate))}
        </li>
      </ul>
      <label htmlFor="lastname" className="bg-white bg-opacity-70 m-5">
        Genre
      </label>
      <select
        name="genre"
        id="genre"
        ref={genderRef}
        required="required"
        className="w-3/4 h-10 px-3 mb-2 text-base text-gray-700 border rounded-lg focus:shadow-outline"
      >
        <option value="">--Merci de choisir une option --</option>
        <option value="Homme">Homme</option>
        <option value="Femme">Femme</option>
        <option value="Autre">Autre</option>
      </select>
      <label htmlFor="lastname" className="bg-white bg-opacity-70 m-5">
        Ancien mot de passe
      </label>
      <input
        ref={passwordRef}
        type="password"
        id="password"
        name="password"
        className="w-3/4 h-10 px-3 mb-2 text-base text-gray-700 border rounded-lg focus:shadow-outline"
        required="required"
      />
      <label htmlFor="lastname" className="bg-white bg-opacity-70 m-5">
        Nouveau mot de passe
      </label>
      <input
        type="password"
        id="newpassword"
        name="newpassword"
        className="w-3/4 h-10 px-3 mb-2 text-base text-gray-700 border rounded-lg focus:shadow-outline"
        required="required"
      />
      <label htmlFor="lastname" className="bg-white bg-opacity-70 m-5">
        Confirmer nouveau mot de passe
      </label>
      <input
        type="password"
        id="passwordConfirm"
        name="passwordConfirm"
        className="w-3/4 h-10 px-3 mb-2 text-base text-gray-700 border rounded-lg focus:shadow-outline"
        required="required"
      />
      <button
        type="submit"
        className="bg-white m-5 mt-20 text-base text-center px-10 py-2 border rounded-lg active:bg-black active:text-white"
      >
        Modifier profil
      </button>
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
        Quitter
      </button>
    </form>
  );
}
