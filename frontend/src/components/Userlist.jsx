const userList = [
  {
    id: "1",
    name: "John",
    email: "jonh@mail.com",
    password: "123456",
  },
  {
    id: "2",
    name: "Quentin",
    email: "quentin@mail.com",
    password: "qspassword",
  },
  {
    id: "3",
    name: "Louis",
    email: "louis@mail.com",
    password: "ldpassword",
  },
  {
    id: "4",
    name: "Jeffrey",
    email: "jeffrey@mail.com",
    password: "jrpassword",
  },
  {
    id: "5",
    name: "Jaafar",
    email: "jaafar@mail.com",
    password: "jcpassword",
  },
];

export default function Userlist() {
  return (
    <ul className="userList">
      {userList.map((user) => (
        <li key={user.id}>
          {user.name} {user.email} {user.password}
        </li>
      ))}
    </ul>
  );
}
