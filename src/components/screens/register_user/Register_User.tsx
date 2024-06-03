import React, { useState } from "react";
import MainSlider from "../../slider/Slider";
import Navbar from "../../navbar/Navbar";

const RegisterUser = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        phone: "",
        website: "",
        name: "",
        city: "",
        about: "",
        gender: "",
        country: "",
        dobDay: "",
        dobMonth: "",
        dobYear: "",
        currency: "",
        incallRates: {
            "1h": "",
            "2h": "",
            "3h": "",
            "4h": "",
            "5h": "",
            "12h": "",
            "24h": "",
        },
        outcallRates: {
            "1h": "",
            "2h": "",
            "3h": "",
            "4h": "",
            "5h": "",
            "12h": "",
            "24h": "",
        },
        services: {
            owo: false,
            oLevel: false,
            cim: false,
            cof: false,
            cob: false,
            swallow: false,
            dfk: false,
            aLevel: false,
            analRimming: false,
            sixtyNine: false,
            striptease: false,
            eroticMassage: false,
            goldenShower: false,
            couples: false,
            gfe: false,
            threesome: false,
            footFetish: false,
            sexToys: false,
            extraball: false,
            domination: false,
            lt: false,
        },
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form data:", formData);
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
        <div className="">
            <Navbar />
            <MainSlider />
            <div className="flex w-[100%] bg-halfWhite">
                {/* First section with 25% width */}
                <div className="w-[20%] py-2 border border-secondary">
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

                {/* Second section with 50% width */}
                <div className="w-[65%] py-2 px-4 ">
                    <div className="container mx-auto px-4 py-8">
                        <h1 className="text-3xl font-bold text-center mb-4 text-blue">
                            Normal User Registration
                        </h1>
                        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                            {/* Username */}
                            <div className="mb-4">
                                <label
                                    htmlFor="username"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Username
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    autoComplete="off"
                                    className="mt-1 lg:h-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>

                            {/* Email */}
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    autoComplete="email"
                                    className="mt-1 lg:h-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>

                            {/* Password */}
                            <div className="mb-4">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="mt-1 lg:h-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>

                       
                          

                            {/* Name */}
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="mt-1 lg:h-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>


                            {/* Submit Button */}
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="bg-gradient-to-r from-secondary to-blue text-white w-[200px] h-[50px] rounded shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition duration-300 ease-in-out"
                                >
                                    <p className="text-[14px]">Complete Register</p>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Third section with 25% width */}
                <div className="w-[15%] py-2 border border-secondary bg-black"></div>
            </div>
        </div>
    );
};

export default RegisterUser;
