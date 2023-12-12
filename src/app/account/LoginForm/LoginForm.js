"use client";

import Link from "next/link";
import React, { useState } from "react";
import "./Loginform.css";
const baseUrl = process.env.BASE_URL;

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${baseUrl}/customer-login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();

        // Check if the response contains valid data
        if (data && data?.data[0].token) {
          const token = data?.data[0]?.token;
          localStorage.setItem("token", token);

          // Redirect or perform other actions upon successful login
        } else {
          console.error("Invalid response data:", data);
          // Handle the case where the response doesn't contain the expected token
        }
      } else {
        console.error("Login failed with status:", response.status);
        // Handle login error
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="border border-gray-400 rounded-xl p-8 w-full lg:w-1/2">
      <h2 className="text-4xl text-black font-semibold">Login</h2>
      <form onSubmit={handleLogin}>
        <input
          className="px-3 py-4 border bg-gray-100 rounded-md border-gray-300 w-full mt-4 text-black focus-within:outline focus-within:outline-1 focus-within:outline-blue-700"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="px-3 py-4 border bg-gray-100 rounded-md border-gray-300 w-full mt-4 text-black focus-within:outline focus-within:outline-1 focus-within:outline-blue-700"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="checkbox"
          id="remember"
          name="remember"
          className="mt-4 me-4"
        />
        <label htmlFor="remember" className="text-black">
          Remember me
        </label>
        <button className="login-button mt-4 mx-auto py-4 px-20 lg:px-36">
          Login
        </button>
        <Link href="/" className="text-black mt-4 inline-block">
          Lost your password?
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
