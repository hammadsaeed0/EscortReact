import React, { useEffect, useState } from "react";
import Navbar from "../../../navbar/Navbar";
import EscortNavbar from "../../../navbar/EscortNavbar";

const EscortProfile = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImages, setSelectedImages] = useState(null);
    const [about, setAbout] = useState("");
    const [name, setName] = useState("");
    const [country, setCountry] = useState("");
    const [gender, setGender] = useState("");
    const [availablity, setAvailablity] = useState("");
    const [ETHNICITY, setETHNICITY] = useState("");
    const [HAIRLENGTH, setHAIRLENGTH] = useState("");
    const [BUSTSIZE, setBUSTSIZE] = useState("");
    const [LOOKS, setLOOKS] = useState("");
    const [city, secCity] = useState("");
    const [website, setWebsite] = useState("");
    const [phone, setPhone] = useState("");
    const [id, setId] = useState("");
    const [image, setImage] = useState("");
    const [service, setService] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem("user");
        console.log(data);
    
        const requestOptions: RequestInit = {
          method: "GET",
          redirect: "follow" as RequestRedirect, // Set the correct type
        };
    
        fetch(`https://hongkongbackend.vercel.app/v1/my-profile/${data}`, requestOptions)
          .then((response) => response.text())
          .then((result) => {
            const data = JSON.parse(result);
            setId(data.user._id);
            setAbout(data.user.about);
            setName(data.user.name);
            setCountry(data.user.country);
            setGender(data.user.gender);
            setAvailablity(data.user.availability);
            setETHNICITY(data.user.ethnicity);
            setBUSTSIZE(data.user.bustSize);
            setLOOKS(data.user.look);
            setHAIRLENGTH(data.user.hairLength);
            setPhone(data.user.phone);
            secCity(data.user.city);
            setImage(data.user.image);
            setWebsite(data.user.website);
            const selectedServicesArray = Object.entries(data.user.services)
              .filter(([key, value]) => value)
              .map(([key, value]) => key);
            setService(selectedServicesArray);
          })
          .catch((error) => console.error(error));
      }, []);

    const link = [
        // { id: 1, name: "Abu Al Abyad Russian Escort Service" },
        // { id: 2, name: "Russian Call Girls Abu Al Abyad" },
        // { id: 3, name: "Abu Dhabi Airport Road Russian Escort Service" },
        // { id: 4, name: "Abu Dhabi Capital District Russian Escort Service" },
        // { id: 5, name: "Abu Dhabi Corniche Area Russian Escort Service" },
        // { id: 6, name: "Abu Dhabi Eastern Road Russian Escort Service" },
        // { id: 7, name: "Abu Dhabi Gate City Russian Escort Service" },
        // { id: 8, name: "Abu Dhabi Russian Escort Service" },
        // { id: 9, name: "Abu Dhabi Villa Compound Russian Escort Service" },
        // { id: 10, name: "Academic City Russian Escort Service" },
        // { id: 11, name: "Airport Street Russian Escort Service" },
        // { id: 12, name: "Ajman Russian Escort Service" },
        // { id: 13, name: "Al Adla City Russian Escort Service" },
        // { id: 14, name: "Al Ain Russian Escort Service" },
    ];

    const rates = [
        { time: "30min", incall: "$100", outcall: "$150" },
        // { time: '1h', incall: '$150', outcall: '$200' },
        // { time: '2h', incall: '$200', outcall: '$250' },
        // { time: 'Overnight', incall: '$400', outcall: '$500' }
    ];
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setSelectedImages(file);
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };


const handleUpdate = () => {
  console.log("Update image", selectedImage);
  const formdata = new FormData();
  formdata.append("images", selectedImages);

  const requestOptions: RequestInit = {
    method: "POST",
    body: formdata,
    redirect: "follow" as RequestRedirect, // Set the correct type
  };

  fetch("https://file-upload-ashen.vercel.app/api/upload", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      let data = JSON.parse(result);
      if (data.success === true) {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
          image: data.data[0],
        });

        const requestOptions: RequestInit = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow" as RequestRedirect, // Set the correct type
        };

        fetch(`https://hongkongbackend.vercel.app/v1/update-profile/${id}`, requestOptions)
          .then((response) => response.text())
          .then((result) => {
            let data = JSON.parse(result);
            if (data.success === true) {
              window.location.reload();
            } else {
              alert("Something Went Wrong, Try Again");
            }
          })
          .catch((error) => console.error(error));
      } else {
        alert("Something Went Wrong");
      }
    })
    .catch((error) => console.error(error));
};

    return (
        <>
            <Navbar />
            <EscortNavbar />
            <div className=" flex bg-[#FFF0F4]  w-full">
                <div className="w-[20%] border border-primary py-5">
                    <h2 className="px-4 font-normal text-primary text-[18px]">
                        Hong kong Escorts <br /> Location:
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
                    <div className="flex flex-col items-center mt-5">
                        {/* Escort Name */}
                        <h1 className="text-3xl font-bold mb-2 text-pink">{name}</h1>

                        {/* Online Status */}
                        <div className=" px-5  rounded-full bg-[#0CCC25] mt-3">
                            <p className=" text-[14px] text-white">Online</p>
                        </div>
                        {/* Image Upload Section */}
                        <div className="border-pink mt-4 rounded-lg p-8 border-dashed border-[2px]">
                            <label
                                htmlFor="image"
                                className="block text-lg font-bold mb-4 text-pink"
                            >
                                Upload Images
                            </label>
                            <div className="flex items-center justify-center border border-dashed border-gray-400 rounded-md p-4">
                                <input
                                    type="file"
                                    id="image"
                                    className="hidden"
                                    onChange={handleImageChange}
                                />
                                <label
                                    htmlFor="image"
                                    className="cursor-pointer flex items-center"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-12 w-12 text-gray-400 mr-2"
                                        viewBox="0 0 20 20"
                                        fill="#D633A3"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M3.464 5.536a8 8 0 1011.314 11.314A8 8 0 003.464 5.536zM9 4a6 6 0 100 12 6 6 0 000-12z"
                                            clipRule="evenodd"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            d="M9 10a2 2 0 100-4 2 2 0 000-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-[16px] text-[gray] w-[300px]">
                                        Drag and drop your images here or click to{" "}
                                        <span className="text-pink">select from your device</span>
                                    </span>
                                </label>
                            </div>
                            <div className="mt-4">


                                {selectedImage ? (
                                    <img
                                        src={selectedImage || 'https://thumbs.dreamstime.com/b/profile-placeholder-default-avatar-girl-vector-136460496.jpg'}
                                        alt="Selected"
                                        className="w-[200px] h-auto rounded-md"
                                    />
                                ) : (
                                    <img
                                    src={image || 'https://thumbs.dreamstime.com/b/profile-placeholder-default-avatar-girl-vector-136460496.jpg'}
                                    alt="Selected"
                                    className="w-[200px] h-auto rounded-md"
                                />
                                )}

                                {selectedImage && (
                                    <button
                                        onClick={handleUpdate}
                                        className="mt-4 bg-secondary text-white px-4 py-2 rounded shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition duration-300 ease-in-out"
                                    >
                                        Update
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* About Section  */}
                        <div className="w-full bg-white p-5 h-[300px] rounded-md mt-4">
                            <div>
                                <h1 className="font-medium text-[16px] text-pink">ABOUT ME:</h1>
                            </div>
                            <div>
                                <p className="font-bold text-[18px]">
                                    25 year old {gender} from{" "}
                                    <span className="text-pink">{country}</span>
                                </p>
                                <p className="text-[16px] leading-6 font-light overflow-wrap break-words">
                                    {about}
                                </p>
                            </div>
                        </div>

                        {/* Her Section  */}
                        <div className=" w-[100%] py-2  rounded-md mt-4 flex justify-between">
                            <div className=" w-[49%] py-2 rounded-md mt-2 flex flex-col ">
                                {/* AVAILABILITY */}
                                <div className=" w-[100%] bg-white py-2 h-auto rounded-md ">
                                    <div className="w-full  py-2 flex justify-around">
                                        <div className="w-36 h-18 font-light   flex flex-col items-start justify-center">
                                            <h1 className="font-bold text-[14px] text-secondary">
                                                AVAILABILITY
                                            </h1>
                                            <p className="text-[18px]">{availablity}</p>
                                        </div>
                                        <div className="w-36 h-18 font-light   flex flex-col items-start justify-center">
                                            <h1 className="font-bold text-[14px] text-secondary">
                                                ETHNICITY
                                            </h1>
                                            <p className="text-[18px]">{ETHNICITY}</p>
                                        </div>
                                    </div>
                                    <div className="w-full  py-2 flex justify-around">
                                        <div className="w-36 h-18 font-light   flex flex-col items-start justify-center">
                                            <h1 className="font-bold text-[14px] text-secondary">
                                                HAIR LENGTH
                                            </h1>
                                            <p className="text-[18px]">{HAIRLENGTH}</p>
                                        </div>
                                        <div className="w-36 h-18 font-light   flex flex-col items-start justify-center">
                                            <h1 className="font-bold text-[14px] text-secondary">
                                                BUST SIZE
                                            </h1>
                                            <p className="text-[18px]">{BUSTSIZE}</p>
                                        </div>
                                    </div>
                                    <div className="w-full  py-2 flex justify-around">
                                        <div className="w-36 h-18 font-light   flex flex-col items-start justify-center">
                                            <h1 className="font-bold text-[14px] text-secondary">
                                                LOOKS
                                            </h1>
                                            <p className="text-[18px]">{LOOKS}</p>
                                        </div>
                                        <div className="w-36 h-18 font-light   flex flex-col items-start justify-center">
                                            <h1 className="font-bold text-[14px] text-secondary">
                                                GENDER
                                            </h1>
                                            <p className="text-[18px]">{gender}</p>
                                        </div>
                                    </div>
                                </div>
                                {/* CONTACT INFO: */}
                                <div className="w-full bg-white py-2 rounded-md mt-10 p-5">
                                    <h1 className="font-bold text-2xl text-blue mb-4">
                                        CONTACT INFO:
                                    </h1>
                                    <div className="mb-4">
                                        <p>
                                            <span className="font-bold mr-2">City:</span> {city}
                                        </p>
                                        <p>
                                            <span className="font-bold mr-2">Country:</span> {country}
                                        </p>
                                        <p>
                                            <span className="font-bold mr-2">Website:</span>{" "}
                                            <a
                                                href="https://hongkongservice.com/"
                                                className="text-blue-500 hover:underline"
                                            >
                                                {website}
                                            </a>
                                        </p>
                                        <p>
                                            <span className="font-bold mr-2">Phone:</span>{" "}
                                            <a
                                                href="tel:+971569407105"
                                                className="text-blue-500 hover:underline"
                                            >
                                                {phone}
                                            </a>
                                        </p>
                                    </div>

                                    <button className="bg-gradient-to-r from-secondary to-blue text-white px-4 py-2 rounded shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition duration-300 ease-in-out">
                                        <p className="text-lg">Contact On Whatsapp</p>
                                    </button>
                                </div>
                            </div>

                            {/* Service SEction  */}
                            {service ? (
                                <div className=" w-[49%] mt-2 py-2 rounded-md">
                                    <div className=" w-[100%] bg-white py-2 rounded-md p-5">
                                        <h1 className="font-bold text-[24px] text-blue ">
                                            SERVICES:
                                        </h1>
                                        {/* <div>
                                            {service.map((service, index) => (
                                                <div key={index} className="flex items-center py-0.5">
                                                    <img
                                                        src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Green_tick.png"
                                                        alt="tick"
                                                        className="w-4 h-4 mr-2"
                                                    />
                                                    <p className="font-light text-[18px]">{service}</p>
                                                </div>
                                            ))}
                                        </div> */}
                                    </div>
                                    {/* RATES: Section ? */}
                                    <div className=" w-[`100%] bg-white py-2  rounded-md  mt-10 p-5 ">
                                        <h1 className="font-bold text-[24px] text-blue ">RATES:</h1>
                                        <div className="flex justify-between font-bold">
                                            <div className="w-1/4 ">
                                                <p className="text-center text-white text-[18px]">
                                                    Incall
                                                </p>
                                            </div>
                                            <div className="w-1/3 bg-secondary ">
                                                <p className="text-center text-white text-[18px]">
                                                    Incall
                                                </p>
                                            </div>
                                            <div className="w-1/3 bg-secondary">
                                                <p className="text-center text-white text-[18px]">
                                                    Incall
                                                </p>
                                            </div>
                                        </div>
                                        {rates.map((rate, index) => (
                                            <div
                                                key={index}
                                                className="flex justify-between items-center"
                                            >
                                                <div className="w-1/4">
                                                    <p className="text-center font-bold text-primary">
                                                        {rate.time}
                                                    </p>
                                                </div>
                                                <div className="w-1/3">
                                                    <p className="text-center font-light text-primary">
                                                        {rate.incall}
                                                    </p>
                                                </div>
                                                <div className="w-1/3">
                                                    <p className="text-center font-light text-primary">
                                                        {rate.outcall}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>

                <div className="w-[15%] bg-primary"></div>
            </div>
        </>
    );
};

export default EscortProfile;
