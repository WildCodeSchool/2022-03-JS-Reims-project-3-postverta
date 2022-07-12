import { useUserData } from "../../../context/UserDataContext";

export default function PseudoArea() {
  const { userData } = useUserData();
  return (
    <div className="  flex justify-items-center place-content-center gap-2 text-lg text-white font-bold">
      <p>{userData.pseudo} :</p>
      <p>40 pv </p>
    </div>
  );
}
