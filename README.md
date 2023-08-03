# Project Name
Reset Password using Firebase Authentication

## Project Description
The "Reset Password using Firebase Authentication" project aims to implement a secure and user-friendly password reset functionality in a web application using Firebase Authentication. The project will allow users to request a password reset link via email in case they forget their password or need to update it for security purposes.

 ### Prerequisites
Before getting started, make sure you have the following set up:

Step 1: Set Up Firebase Project:
If you haven't created a Firebase project, go to the Firebase console (https://console.firebase.google.com/) and create a new project. Follow the on-screen instructions to set up your project.

Step 2: Enable Firebase Authentication:
In the Firebase console, navigate to "Authentication" from the left sidebar. Under the "Sign-in method" tab, choose the authentication methods you want to enable, such as Email/Password, Google etc. Enable the desired methods and save your changes.

Step 3: Install Firebase SDK:
To use Firebase Authentication in your application, you need to integrate the Firebase SDK into your project. Refer to the official Firebase documentation for instructions on how to install the SDK for your specific platform.

## Dependencies

    "bootstrap": "^5.1.3",
    "firebase": "^10.0.0",
    "react": "^18.2.0",
    "react-bootstrap": "^2.8.0",
    "react-dom": "^18.2.0",
    "react-google-button": "^0.7.2",
    "react-phone-number-input": "^3.3.0",
    "react-router-dom": "^6.14.2",
    "react-scripts": "5.0.1"

## Running the Project in Vs Code
a. Build the project: Open The terminal and used command 'npm start'.
b. Access the project:

   - Open a web browser.
   - Enter the URL (e.g., `http://localhost:3000/`).

c.In your app, provide a way for users to initiate a password reset. This could be through a "Forgot Password" button or link on the login page.
When the user clicks on the "Forgot Password" link, prompt them to enter their email address.

Send Password Reset Email

Once the user enters their email address, use the sendPasswordResetEmail() method from Firebase Authentication to send a password reset link to the user's email.

When the user clicks on the password reset link in their email, it will typically direct them to a specific URL in your app (configured in the Firebase console).
You'll need to handle this URL and extract the necessary information. password is updated sucessfull.


## Conclusion:
The "Reset Password using Firebase Authentication" project aims to create a secure and user-friendly password reset functionality using Firebase. By implementing this feature, users will have a streamlined and hassle-free experience when they need to reset their passwords. The project's successful completion will demonstrate the team's technical skills and commitment to building secure web applications.

## Project Priview
![20230803_151905](https://github.com/saiinfo/Reset-Password-using-Firebase-Authentication/assets/26924010/8175c26a-4458-4fa4-a063-6b8811f742f5)


