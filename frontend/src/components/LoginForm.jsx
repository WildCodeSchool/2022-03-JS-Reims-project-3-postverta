import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useUserData } from "../context/UserDataContext";
import "react-toastify/dist/ReactToastify.css";

export default function LoginForm() {
  const { setUserData } = useUserData();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  return (
    <form
      className="p-8 bg-black text-white flex flex-col justify-center items-center font-['Sansita-Regular']"
      onSubmit={(event) => {
        event.preventDefault();
        const login = {
          email: emailRef.current.value,
          password: passwordRef.current.value,
        };
        fetch(
          `${
            import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
          }/login`,
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(login),
          }
        )
          .then((response) => response.json())
          .then((data) => {
            if (data.token) {
              setUserData(data.user);
              toast.success("Connexion validé !");
              navigate("/library");
            } else {
              toast.error("Échec de la connexion !");
            }
          });
      }}
    >
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
        Se Connecter
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
      <button
        type="button"
        className=" m-2 text-base px-10 py-2  border rounded-lg"
        onClick={() => navigate("/")}
      >
        Retour a la page d'accueil
      </button>
    </form>
  );
}
