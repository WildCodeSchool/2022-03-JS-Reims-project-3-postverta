import { useRef } from "react";

export default function User() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        const user = {
          name: nameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
        };

        fetch("http://localhost:5000/users", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }).then((response) => {
          alert(response.status);
        });
      }}
    >
      <input ref={nameRef} type="text" name="name" />
      <input ref={emailRef} type="text" name="email" />
      <input ref={passwordRef} type="password" name="password" />
      <button type="submit">envoyer</button>
    </form>
  );
}
