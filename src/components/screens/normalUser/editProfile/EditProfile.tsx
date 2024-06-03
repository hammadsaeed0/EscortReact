import React, { useState } from 'react'
import Navbar from '../../../navbar/Navbar'
import SubNavbar from '../../../navbar/SubNav'

const EditProfile = () => {
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
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form data:", formData);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    return (
        <>
            <Navbar />
            <SubNavbar />
            <div className="w-[100%] py-2 px-4  bg-primary">
                    <div className="container mx-auto px-4 py-8">
                        <h1 className="text-3xl font-bold text-center mb-4 text-blue">
                           Update Profile
                        </h1>
                        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                            {/* Username */}
                            <div className="mb-4">
                                <label
                                    htmlFor="username"
                                    className="block text-sm font-medium text-gray-700 text-white"
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
 {/* Name */}
 <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 text-white"
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

                            {/* Email */}
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 text-white"
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
                                    className="block text-sm font-medium text-gray-700 text-white"
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

                       
                          

                           

                            {/* Submit Button */}
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="bg-gradient-to-r from-secondary to-blue text-white w-[200px] h-[50px] rounded shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition duration-300 ease-in-out"
                                >
                                    <p className="text-[14px]">Update</p>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

        </>
    )
}

export default EditProfile