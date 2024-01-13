"use client";
import BankCard from "@/components/bank_card";
import makeApiRequest from "../utils/api";
import { useRouter } from "next/navigation";
import { useState, useEffect } from 'react';



const banks = [
  {
    name: "Leslie Alexander",
    email: "leslie.alexander@example.com",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
    id: "3",
  },
  {
    name: "Michael Foster",
    email: "michael.foster@example.com",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
    id: "4",
  },
  {
    name: "Dries Vincent",
    email: "dries.vincent@example.com",
    role: "Business Relations",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: null,
    id: "6",
  },
  {
    name: "Lindsay Walton",
    email: "lindsay.walton@example.com",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
    id: 8,
  },
];

async function getBanks(){


  try {
    const responseData = await makeApiRequest('/get-data', 'GET', );
    console.log(responseData.data)

    
  } catch (error) {
    console.error('Error en el cierre de sesión:', error);
  }

}


 
function Dashboard() {
  const [banks, setBanks] = useState([]);
  
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const responseData = await makeApiRequest('/get-data', 'GET', );
        console.log(responseData.data)
        setBanks(responseData.data);
    
      } catch (error) {
        console.error('Error en el cierre de sesión:', error);
      }
    };

    fetchData();
  }, []); // El segundo argumento [] asegura que useEffect solo se ejecute una vez al montar el componente


  
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

      

      <div className="flex justify-center items-center flex-grow ">
        <BankCard banks={banks} />
      </div>
    </div>
  );
}

export default Dashboard;
