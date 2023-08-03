import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import "../index.css";

const Signin = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser, forgotPassword } = useUserContext();
  

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

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email) {
      confirmAlert({
        title: "Forgot Password",
        message: "Are you sure you want to reset your password?",
        buttons: [
          {
            label: "Yes",
            onClick: () => {
              forgotPassword(email)
                .then(() => {
                  emailRef.current.value = "";
                  toast.success("Password reset link sent successfully!", {
                    position: toast.POSITION.TOP_CENTER,
                  });
                })
                .catch((error) => {
                  console.error("Password reset error:", error);
                  toast.error("Password reset link could not be sent.", {
                    position: toast.POSITION.TOP_CENTER,
                  });
                });
            },
          },
          {
            label: "No",
            onClick: () => {
              // Do nothing if the user clicks "No" in the confirmation dialog.
            },
          },
        ],
      });
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

        <p onClick={forgotPasswordHandler}>Forgot Password?</p>
      </form>
      <ToastContainer /> {/* Add the ToastContainer at the root level */}
    </div>
  );
};

export default Signin;
