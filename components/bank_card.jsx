"use edit";

import { useRouter } from 'next/navigation';

function BankCard({ banks }) {const router = useRouter()

  
  return (
    <div className="flex justify-center items-center h-screen">
      <ul>
        {banks.map((bank) => (
          <li
            key={bank.bankId}
            className="mb-10"
            onClick={() => {
              router.push(`/bank/${bank.bankId}`);
            }}
          >
            <div
              className={`flex min-w-0 gap-x-4 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-indigo-600 hover:shadow-md p-3 rounded-lg ${
                bank.bankLogo ? 'bg-indigo-750' : 'bg-transparent'
              }`}
            >
              {bank.bankLogo && (
                <img
                  className="h-12 w-12 flex-none rounded-full"
                  src={bank.bankLogo}
                  alt=""
                />
              )}
              <div className="min-w-0 flex-auto">
                <p className="text-xl font-semibold leading-6 text-indigo-50">
                  {bank.bankName}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default BankCard;
