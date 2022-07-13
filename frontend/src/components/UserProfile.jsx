import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useUserData } from "../context/UserDataContext";

export default function UserProfile() {
  function submitForm(event) {
    event.preventDefault();
  }
  const { userData } = useUserData();
  const navigate = useNavigate();
  const genderRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();

  const labelClassName =
    "bg-white bg-opacity-70 mb-4 p-4 w-3/4 text-center flex flex-col items-center justify-center ";
  const inputClassName =
    "px-3 mt-2 text-base placeholder-black border rounded-lg focus:shadow-outline";
  const whiteButtonClassName =
    "bg-white m-5 text-base text-center px-10 py-2 border rounded-lg active:bg-black active:text-white";

  return (
    <form
      className="font-['Sansita-Regular'] bg-[url('./assets/img/dream-account.jpg')] bg-cover bg-gray-500 bg-blend-darken flex justify-center flex-col items-center"
      onSubmit={submitForm}
    >
      <h2 className="bg-white bg-opacity-70 text-center m-5 text-3xl px-1">
        Mon Compte
      </h2>
      <p className="bg-white bg-opacity-70 text-center m-5 text-xl px-1">
        Informations :
      </p>
      <label htmlFor="name" className={labelClassName}>
        Nom :
        <input
          ref={nameRef}
          id="name"
          type="text"
          name="name"
          className={inputClassName}
          placeholder={userData.name}
          required="required"
        />
      </label>
      <label htmlFor="lastname" className={labelClassName}>
        Mail
        <ul>
          <li className="m-1 text-xl">{userData.email}</li>
        </ul>
      </label>
      <label htmlFor="lastname" className={labelClassName}>
        Pseudo
        <input
          id="lastname"
          type="text"
          name="lastname"
          className="m-1 placeholder-black mb-2 px-3 rounded-lg focus:shadow-outline"
          placeholder={userData.pseudo}
        />
      </label>
      <label htmlFor="birthday" className={labelClassName}>
        <p className="m-1">
          Date de naissance :
          {new Intl.DateTimeFormat("fr-FR", {
            year: "numeric",
            month: "long",
            day: "2-digit",
          }).format(new Date(userData.birthdate))}
        </p>
      </label>
      <label htmlFor="lastname" className={labelClassName}>
        Genre
        <select
          name="genre"
          id="genre"
          ref={genderRef}
          required="required"
          className={inputClassName}
        >
          <option value="">--Merci de choisir une option --</option>
          <option value="Homme">Homme</option>
          <option value="Femme">Femme</option>
          <option value="Autre">Autre</option>
        </select>
      </label>
      <label htmlFor="lastname" className={labelClassName}>
        Ancien mot de passe
        <input
          ref={passwordRef}
          type="password"
          id="password"
          name="password"
          className={inputClassName}
          required="required"
        />
      </label>
      <label htmlFor="lastname" className={labelClassName}>
        Nouveau mot de passe
        <input
          type="password"
          id="newpassword"
          name="newpassword"
          className={inputClassName}
          required="required"
        />
      </label>
      <label htmlFor="lastname" className={labelClassName}>
        Confirmer nouveau mot de passe
        <input
          type="password"
          id="passwordConfirm"
          name="passwordConfirm"
          className="px-3 mb-2 text-base text-gray-700 border rounded-lg focus:shadow-outline"
          required="required"
        />
      </label>
      <button type="submit" className={whiteButtonClassName}>
        Modifier profil
      </button>
      <a href="/" className={whiteButtonClassName}>
        Déconnexion
      </a>
      <button
        onClick={() => {
          navigate("/");
        }}
        type="button"
        className="bg-red-700 m-5 text-white text-base text-center px-10 py-2 border rounded-lg active:bg-black active:text-white"
      >
        Supprimer le compte
      </button>
    </form>
  );
}
