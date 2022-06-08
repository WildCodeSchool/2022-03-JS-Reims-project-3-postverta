import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const promise = () => {
    const resolveafter3sec = new Promise((resolve, reject) => {
      setTimeout(resolve, 3000);
      setTimeout(reject, 3000);
    });
    toast.promise(resolveafter3sec, {
      pending: "Inscription en cours ...",
      success: "Inscription  validé !",
      error: "Inscription  rejeté !",
    });
  };
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
          if (response.status === 201) {
            promise((success) => {
              toast.success(success);
            });
          } else {
            promise((error) => toast.error(error));
          }
        });
      }}
    >
      <div className="m-8">
        <input
          ref={nameRef}
          type="text"
          name="name"
          className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
          placeholder="Name"
          required="required"
        />
        <input
          ref={emailRef}
          type="text"
          name="email"
          className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
          placeholder="Email"
          required="required"
        />
        <input
          ref={passwordRef}
          type="password"
          name="password"
          className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
          placeholder="Password"
          required="required"
        />
        <button
          type="submit"
          className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
        >
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
          Register
        </button>
      </div>
    </form>
  );
}
