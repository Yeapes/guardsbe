import React from "react";
import "./Registerform.css";

const RegisterForm = () => {
  return (
    <div className="border border-gray-400 rounded-xl p-8 w-full lg:w-1/2">
      <h2 className="text-4xl text-black font-semibold">Register</h2>
      <form>
        <input
          className="px-3 py-4 border bg-gray-100 rounded-md border-gray-300 w-full mt-4 text-black focus-within:outline focus-within:outline-1 focus-within:outline-blue-700"
          type="email"
          placeholder="Email"
        />
        <input
          className="px-3 py-4 border bg-gray-100 rounded-md border-gray-300 w-full mt-4 text-black focus-within:outline focus-within:outline-1 focus-within:outline-blue-700"
          type="text"
          placeholder="Username"
        />
        <input
          className="px-3 py-4 border bg-gray-100 rounded-md border-gray-300 w-full mt-4 text-black focus-within:outline focus-within:outline-1 focus-within:outline-blue-700"
          type="password"
          placeholder="Password"
        />
        <input
          className="px-3 py-4 border bg-gray-100 rounded-md border-gray-300 w-full mt-4 text-black focus-within:outline focus-within:outline-1 focus-within:outline-blue-700"
          type="password"
          placeholder="Confirm Password"
        />

        <button className="register-button mt-4 mx-auto py-4 px-20 lg:px-36 ">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
