import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import { toast } from "react-toastify"; // Import the toast component
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toast styles
import "../index.css";

const Signup = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  const { registerUser } = useUserContext();

  const onSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;
    
    if (email && password && name) {
      try {
        await registerUser(email, password, name);
        // Registration successful, show a toast notification
        toast.success("Registration successful!", {
          position: toast.POSITION.TOP_CENTER
        });
      } catch (error) {
        // Handle registration error, you can also show an error toast here
        console.error("Registration error:", error);
      }
    }
  };

  return (
    <div className="form">
      <h2> New User</h2>
      <form>
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Name" type="text" ref={nameRef} />
        <input placeholder="Password" type="password" ref={psdRef} />
        <button type="submit" variant="primary" onClick={onSubmit}>Register</button>
      </form>
    </div>
  );
};

export default Signup;
