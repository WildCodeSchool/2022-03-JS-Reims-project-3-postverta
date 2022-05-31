import React from "react";

const user = {
  id: "1",
  name: "John",
  email: "jonh@mail.com",
  password: "123456",
};
export default function User() {
  return (
    <div className="user">
      <p className="user-name">{user.name}</p>
      <p className="user-email">{user.email}</p>
      <p className="user-password">{user.password}</p>
    </div>
  );
}
