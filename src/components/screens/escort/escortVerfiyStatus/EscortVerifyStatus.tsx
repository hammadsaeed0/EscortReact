import React, { useState } from 'react'
import Navbar from '../../../navbar/Navbar';
import EscortNavbar from '../../../navbar/EscortNavbar';

const EscortVerifyStatus = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };
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
              <h1 className="text-2xl font-bold text-center mb-4 text-pink">Verify Your Account</h1>
              <p className="text-sm text-gray-600 mb-4">
                Increase the credibility of your account by submitting a verification photo.
                Please upload a photo of yourself holding a paper in your hands with the name of our website.
                All photos are private and will not be published!
                You can only upload 1 photo.
              </p>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="mb-4"
              />
              {image && (
                <div className="mb-4">
                  <img src={image} alt="Uploaded Image" className="w-[100px] h-[100px]" />
                </div>
              )}
               <button className="bg-gradient-to-r from-secondary to-blue text-white px-2 py-1 rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition duration-300 ease-in-out">
            <p className="text-[14px]">Apply For Verification</p>
          </button>
            </div>
          </div>
         
        </div>


        <div className="w-[15%] bg-primary"></div>
      </div>
    </>
  )
}

export default EscortVerifyStatus