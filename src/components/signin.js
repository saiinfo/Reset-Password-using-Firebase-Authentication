import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../index.css";

const Signin = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser } = useUserContext();

  const onSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;

    if (email && password) {
      try {
        await signInUser(email, password);
        // Show a toast notification on successful login
        toast.success("Login successful!", {
          position: toast.POSITION.TOP_CENTER,
        });
      } catch (error) {
        console.error("Login error:", error);
      }
    }
  };

  return (
    <div className="form">
      <h2> Login </h2>
      <form onSubmit={onSubmit}>
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Password" type="password" ref={psdRef} />
        <button type="submit" variant="primary">
          Sign In
        </button>
      </form>
      <ToastContainer /> {/* Add the ToastContainer at the root level */}
    </div>
  );
};

export default Signin;
