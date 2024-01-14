"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import makeApiRequest from "../utils/api";
import Spinner from "@/components/spinner";

function Register() {
  const [user_name, setName] = useState("");
  const [user_email, setEmail] = useState("");
  const [user_password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [showUserCreated, setUserCreated] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  

  const handleRegister = async (event) => {
    event.preventDefault();
    setLoading(true);

   setTimeout( async() => { try {
      const responseData = await makeApiRequest("/create-user", "POST", {
        user_name,
        user_email,
        user_password,
      });
      console.log("User created");
      setUserCreated(true);
      router.push('/login');
    } catch (error) {
      console.error("Error en la operación:", error);
      setShowAlert(true);
    }finally{
      setLoading(false);
    }},1000)
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-12 text-indigo-100">
        Create your account!
      </h1>
      <form className="max-w-sm mx-auto mb-4">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-indigo-50 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            type="name"
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Name"
            value={user_name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
          onClick={handleRegister}
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          disabled={loading}
          >
            {loading ? <Spinner /> : 'Sign In'}
        </button>
      </form>
      <div className="text-sm text-gray-500 text-center mt-2">
        <p className="mb-2">
          <Link href="/login" className="text-indigo-500 hover:underline">
            Sign In
          </Link>
        </p>{" "}
        {showAlert && (
          <div className="fixed top-0 right-0 mt-4 mr-4 bg-red-500 text-white p-4 rounded shadow-lg">
            <p>User already exists</p>
          </div>
        )}
        {showUserCreated && (
          <div className="fixed top-0 right-0 mt-4 mr-4 bg-green-500 text-white p-4 rounded shadow-lg">
            <p>User created, try to login</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Register;
