"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from 'react';
import makeApiRequest from "@/app/utils/api";
function BankPage({ params }) {
  console.log("parametros", params);
  const router = useRouter();
  
  const handleLogout = async () => {
    try {
      await makeApiRequest('/logout', 'POST');
      router.push('/login');
    } catch (error) {
      console.error('Error en el cierre de sesión:', error);
    }}

  return (
    <div className="relative h-screen flex flex-col ">
      <div className="flex justify-between items-center px-4 py-4 bg-indigo-50">
        <h1 className="text-4xl font-bold text-indigo-900">Bank App</h1>
        <div></div>
        <button onClick={handleLogout} className="bg-indigo-600 text-white font-bold px-4 py-2 rounded">
          Log Out
        </button>
      </div>

      <div className="max-w-2xl mx-auto mt-8 p-8 bg-white border rounded-lg shadow-md">
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            Bank Information
          </h3>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">
            Name
          </dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            Banquito
          </dd>
        </div>{" "}
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">
            Balance
          </dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            394849
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">
            Ingresos
          </dt>
          <dd className="mt-1 text-sm leading-6 text-green-700 sm:col-span-2 sm:mt-0">
            56778
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">
            Egresos
          </dt>
          <dd className="mt-1 text-sm leading-6 text-red-700 sm:col-span-2 sm:mt-0">
            $120,000
          </dd>
        </div>
      </div>
    </div>
  );
}

export default BankPage;
