import React, { useState } from 'react'
import Navbar from '../../../navbar/Navbar';
import EscortNavbar from '../../../navbar/EscortNavbar';

const EscortPremium = () => {


  const link = [
    { id: 1, name: "Abu Al Abyad Russian Escort Service" },
    { id: 2, name: "Russian Call Girls Abu Al Abyad" },
    { id: 3, name: "Abu Dhabi Airport Road Russian Escort Service" },
    { id: 4, name: "Abu Dhabi Capital District Russian Escort Service" },
    { id: 5, name: "Abu Dhabi Corniche Area Russian Escort Service" },
    { id: 6, name: "Abu Dhabi Eastern Road Russian Escort Service" },
    { id: 7, name: "Abu Dhabi Gate City Russian Escort Service" },
    { id: 8, name: "Abu Dhabi Russian Escort Service" },
    { id: 9, name: "Abu Dhabi Villa Compound Russian Escort Service" },
    { id: 10, name: "Academic City Russian Escort Service" },
    { id: 11, name: "Airport Street Russian Escort Service" },
    { id: 12, name: "Ajman Russian Escort Service" },
    { id: 13, name: "Al Adla City Russian Escort Service" },
    { id: 14, name: "Al Ain Russian Escort Service" },
  ];


  return (
    <>
      <Navbar />
      <EscortNavbar />
      <div className=" flex bg-[#FFF0F4]  w-full">
        <div className="w-[20%] border border-primary py-5">
          <h2 className="px-4 font-normal text-primary text-[18px]">
            Dubai Russian Escorts <br /> Location:
          </h2>
          <ul className="px-4">
            {link.map((link) => (
              <li className="py-2" key={link.id}>
                <a href={link.name} className="text-blue text-blue-700 ">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[65%] ">
          <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="max-w-lg bg-white p-6 rounded-lg shadow-lg">
              <h1 className="text-2xl font-bold text-center mb-4 text-pink">Buy Premium</h1>
              <p className="text-[16px] text-[gray] mb-4">
                With <span className='font-bold'>Premium position</span> you will be listed on top of your City and Country page.
                Subscribe to Premium position for <span className='font-bold'>10€ or 11$ / month.</span>
              </p>
              <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2">Crypto Wallets:</h2>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>USDT – Tron (TRC20)</strong>
                  <br />
                  TSSbVgKtdd3Dddhii7uW5jAaZLybkS5iEN
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>BTC – Bitcoin</strong>
                  <br />
                  1Q9CchsfDLkGs3gCFD2KB5YHPMLqjPMkmx
                </p>
              </div>
              <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2">Payment Method:</h2>
                <p className="text-sm text-gray-600 mb-2">
                  We also accept Credit & Debit card payments trough Stripe global payment link.
                  <span className='text-pink font-semibold'>Ask for payment link.</span>
                </p>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                After payment <span className="text-sm text-pink uppercase font-bold mb-4">email us</span> the URL(s) to your profile(s).
              </p>
            </div>
          </div>

        </div>


        <div className="w-[15%] bg-primary"></div>
      </div>
    </>
  )
}

export default EscortPremium