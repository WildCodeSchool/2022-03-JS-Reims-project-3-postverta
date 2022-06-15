import { useUserData } from "../context/UserDataContext";

export default function Account() {
  const { userData } = useUserData();

  return (
    <div className="font-['Sansita-Regular'] bg-[url('./assets/img/dream-account.jpg')] bg-no-repeat bg-cover bg-gray-500 bg-blend-darken">
      <p className="bg-white bg-opacity-70 text-center">Compte utilisateur</p>
      <p className="bg-white bg-opacity-70 text-center">Informations</p>
      <p className="bg-white bg-opacity-70 text-center">
        {" "}
        Nom : {userData.name}
      </p>
      <p className="bg-white bg-opacity-70 text-center">
        Mail : {userData.email}
      </p>
      <p className="bg-white bg-opacity-70 text-center">
        Pseudo : {userData.pseudo}
      </p>
      <p className="bg-white bg-opacity-70 text-center">
        Date de naissance : {userData.birthdate}
      </p>
      <p className="bg-white bg-opacity-70 text-center">
        Genre : {userData.gender}
      </p>
    </div>
  );
}
