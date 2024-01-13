"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import makeApiRequest from "../utils/api";

function Login() {
  const router = useRouter();

  const [user_email, setEmail] = useState("");
  const [user_password, setPassword] = useState("");

  

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const responseData = await makeApiRequest('/login', 'POST', { user_email, user_password });
      console.log(responseData);

      router.push('/dashboard');
    } catch (error) {
      console.error('Error en la operación:', error);
    }
  };


  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-12 text-indigo-100">
        Hey, welcome!
      </h1>
      <form className="max-w-sm mx-auto mb-4">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-indigo-50 text-sm font-bold mb-2"
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="E-mail"
            value={user_email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-indigo-50 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Password"
            value={user_password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleLogin}
        >
          Sign In
        </button>
      </form>
      <div className="text-sm text-gray-500 text-center mt-6">
        <p className="mb-2">
          Don't you have an account?{" "}
          <Link href="/register" className="text-indigo-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
