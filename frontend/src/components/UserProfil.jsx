import { useUserData } from "../context/UserDataContext";

export default function UserProfil() {
  const { userData } = useUserData();

  return (
    <div
      className="font-['Sansita-Regular'] bg-[url('./assets/img/dream-account.jpg')] bg-no-repeat bg-cover bg-gray-500 bg-blend-darken flex justify-center 
    flex-col"
    >
      <p className="bg-white bg-opacity-70 text-center m-5 text-3xl">
        Compte utilisateur
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
          }).format(userData.birthDate)}
        </li>
        <li className="m-1">Genre : {userData.gender}</li>
      </ul>
    </div>
  );
}
