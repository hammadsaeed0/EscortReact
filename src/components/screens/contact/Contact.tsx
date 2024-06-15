import React, { useState } from "react";
import MainSlider from "../../slider/Slider";
import Navbar from "../../navbar/Navbar";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        website: "",
        message: "",
    });
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
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here, such as sending the data to your backend
        console.log("Form data:", formData);
    };

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
                        <h1 className="text-3xl font-bold text-center mb-4 text-blue">Contact Us</h1>
                        {/* <p className="text-[18px] text-gray-600 mb-8 text-left font-light">
                            Outcall is conceivable in any 5 star in in <span className="font-bold text-[16px]">HONG KONG Russian Escorts</span>, specially nearby all airport area on the off chance that you need to book an escort for an outcall and you may call at +971569407105, at that point furnish us your lodging subtleties alongside your inn name, room number and registration name, young lady can reach at close to your entryway step. You can send us an email through the beneath contact form.
                        </p> */}
                        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 lg:h-10  focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} autoComplete="email" className="mt-1 lg:h-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                            </div>
                            {/* <div className="mb-4">
                                <label htmlFor="website" className="block text-sm font-medium text-gray-700">Website</label>
                                <input type="text" id="website" name="website" value={formData.website} onChange={handleChange} className="mt-1 lg:h-10  focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                            </div> */}
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                {/* <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows=4 className="mt-1 lg:h-40  focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea> */}
                            </div>
                            <div className="text-center">
                                {/* <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    Submit
                                </button> */}
                                <button className="bg-gradient-to-r from-secondary to-blue text-white px-5 py-1 rounded shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition duration-300 ease-in-out">
                                    <p className="text-[14px]">Send Message</p>
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

export default Contact;
