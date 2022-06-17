import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import HomeLink from "./HomeLink";
import "react-toastify/dist/ReactToastify.css";

export default function RegisterForm() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const pseudoRef = useRef();
  const genderRef = useRef();
  const birthdateRef = useRef();
  const navigate = useNavigate();

  return (
    <form
      className="p-8 bg-black text-white flex flex-col justify-center items-center font-['Sansita-Regular']"
      onSubmit={(event) => {
        event.preventDefault();

        const user = {
          name: nameRef.current.value,
          pseudo: pseudoRef.current.value,
          birthdate: birthdateRef.current.value,
          gender: genderRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
        };

        fetch(
          `${
            import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
          }/users`,
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          }
        ).then((response) => {
          if (response.status === 201) {
            toast.success("Inscription  validé !");
            navigate("/login");
          } else {
            toast.error("Échec de l'inscription !");
          }
        });
      }}
    >
      <label htmlFor="name">Nom :</label>
      <input
        ref={nameRef}
        id="name"
        type="text"
        name="name"
        className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-300 border rounded-lg focus:shadow-outline"
        placeholder="John Doe"
        required="required"
      />
      <label htmlFor="name">Pseudo :</label>
      <input
        ref={pseudoRef}
        id="pseudo"
        type="text"
        name="pseudo"
        className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-300 border rounded-lg focus:shadow-outline"
        placeholder="JohnDoe78"
        required="required"
      />
      <label htmlFor="email">Email :</label>
      <input
        ref={emailRef}
        type="email"
        id="email"
        name="email"
        className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-300 border rounded-lg focus:shadow-outline"
        placeholder="johndoe@mail.com"
        required="required"
      />
      <label htmlFor="Genre">Genre :</label>
      <select
        name="genre"
        id="genre"
        ref={genderRef}
        required="required"
        className="w-full h-10 px-3 mb-2 text-base text-gray-700 border rounded-lg focus:shadow-outline"
      >
        <option value="">--Merci de choisir une option --</option>
        <option value="Homme">Homme</option>
        <option value="Femme">Femme</option>
        <option value="Autre">Autre</option>
      </select>
      <label htmlFor="birthday">Date de naissance :</label>
      <input
        ref={birthdateRef}
        id="birthday"
        type="date"
        name="birthdate"
        className="w-full h-10 px-3 mb-2 text-base text-gray-700 border rounded-lg focus:shadow-outline"
        required="required"
      />
      <label htmlFor="password">Mot de passe :</label>
      <input
        ref={passwordRef}
        type="password"
        id="password"
        name="password"
        className="w-full h-10 px-3 mb-2 text-base text-gray-700 border rounded-lg focus:shadow-outline"
        required="required"
      />
      <button
        type="submit"
        className=" m-2 text-base px-10 py-2  border rounded-lg"
      >
        S'inscrire
      </button>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <HomeLink />
    </form>
  );
}
