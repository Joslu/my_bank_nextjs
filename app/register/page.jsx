
import Link from "next/link";


function Register() {
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
            type="text"
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Name"
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
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create
        </button>
      </form>
      <div className="text-sm text-gray-500 text-center mt-2">
        <p className="mb-2">
          <Link href="/login" className="text-indigo-500 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
