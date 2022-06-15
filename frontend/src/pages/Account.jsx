import { useUserData } from "../context/UserDataContext";

export default function Account() {
  const { userData } = useUserData();

  return (
    <>
      <p> Nom : {userData.name}</p>
      <p>Mail : {userData.email}</p>
      <p>Pseudo : {userData.pseudo}</p>
      <p>Date de naissance : {userData.birthdate}</p>
      <p>Genre : {userData.gender}</p>
    </>
  );
}
