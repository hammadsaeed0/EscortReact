import React, { useState } from "react";
import MainSlider from "../../slider/Slider";
import Navbar from "../../navbar/Navbar";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";



const EscortRegister = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        phone: "",
        website: "",
        name: "",
        about: "",
        gender: "",
        country: "",
        ethnicity: "",
        look: "",
        hair: "",
        bust: "",
        city: "",
        currency: "",
        availability: "",
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
        extra: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };



    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
      
        // Filter out unselected services
        const selectedServices = Object.fromEntries(
          Object.entries(formData.services).filter(([service, checked]) => checked)
        );
      
        // Create the data to be sent, including only selected services
        const dataToSend = {
        //   username: formData.username,
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
        //   website: formData.website,
        //   name: formData.name,
        //   city: formData.city,
        //   about: formData.about,
        //   gender: formData.gender,
        //   country: formData.country,
        //   ethnicity: formData.ethnicity,
        //   look: formData.look,
        //   hairLength: formData.hair,
        //   bustSize: formData.bust,
        //   availability: formData.availability,
        //   currency: formData.currency,
        //   services: selectedServices,
        //   extraServices: formData.extra,
        };
      
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
      
        const raw = JSON.stringify(dataToSend);
      
        const requestOptions: RequestInit = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow" as RequestRedirect, // Set the correct type
        };
      
        fetch("https://hongkongbackend.vercel.app/v1/register", requestOptions)
          .then((response) => response.text())
          .then((result) => {
            let data = JSON.parse(result);
            if (data.success === false) {
              toast(data.error, {
                duration: 6000,
              });
            } else {
              navigate("/login");
            }
          })
          .catch((error) => console.error(error));
      };


    const handleServiceChange = (e) => {
        const { name, checked } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            services: {
                ...prevState.services,
                [name]: checked,
            },
        }));
    };


    return (
        <div className="">
            <Navbar />
            <MainSlider />
            <div className="flex w-[100%] bg-halfWhite">
                <Toaster />
                {/* First section with 25% width */}
                <div className="w-[20%] py-2 border bg-primary">
                    
                
                </div>

                {/* Second section with 50% width */}
                <div className="w-[65%] py-2 px-4 ">
                    <div className="container mx-auto px-4 py-8">
                        <h1 className="text-3xl font-bold text-center mb-4 text-blue">
                            Escort Registration
                        </h1>
                        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                            {/* Username */}
                            {/* <div className="mb-4">
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
                            </div> */}

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

                            {/* Phone */}
                            <div className="mb-4">
                                <label
                                    htmlFor="phone"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="mt-1 lg:h-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>

                            {/* Website */}
                            {/* <div className="mb-4">
                                <label
                                    htmlFor="website"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Website
                                </label>
                                <input
                                    type="text"
                                    id="website"
                                    name="website"
                                    value={formData.website}
                                    onChange={handleChange}
                                    className="mt-1 lg:h-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div> */}

                            {/* Name */}
                            {/* <div className="mb-4">
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
                            </div> */}

                            {/* City */}
                            {/* <div className="mb-4">
                                <label
                                    htmlFor="city"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    City
                                </label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="mt-1 lg:h-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div> */}

                            {/* About */}
                            {/* <div className="mb-4">
                                <label
                                    htmlFor="about"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    About
                                </label>
                                <textarea
                                    id="about"
                                    name="about"
                                    value={formData.about}
                                    onChange={handleChange}
                                    // rows= 4,
                                    className="mt-1 lg:h-40 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                ></textarea>
                            </div> */}

                            {/* Gender */}
                            {/* <div className="mb-4">
                                <span className="block text-sm font-medium text-gray-700">
                                    Gender
                                </span>
                                <div className="mt-1 flex">
                                    <input
                                        type="radio"
                                        id="female"
                                        name="gender"
                                        value="Female"
                                        onChange={handleChange}
                                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                    />
                                    <label
                                        htmlFor="female"
                                        className="ml-2 block text-sm text-gray-900"
                                    >
                                        Female
                                    </label>
                                    <input
                                        type="radio"
                                        id="ladyboy"
                                        name="gender"
                                        value="ladyboy"
                                        onChange={handleChange}
                                        className="ml-4 focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                    />
                                    <label
                                        htmlFor="male"
                                        className="ml-2 block text-sm text-gray-900"
                                    >
                                        Lady boy
                                    </label>


                                </div>
                            </div> */}

                            {/* Country */}
                            {/* <div className="mb-4">
                                <label
                                    htmlFor="country"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Country
                                </label>
                                <select
                                    id="country"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    className="mt-1 lg:h-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                >
                                    <option value="">Select Country</option>
                                    <option value="Hongkong">Hong Kong</option>
                                </select>
                            </div> */}

                            {/* District */}
                            {/* <div className="mb-4">
                                <label
                                    htmlFor="district"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    District
                                </label>
                                <select
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="mt-1 lg:h-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                >
                                    <option value="">Select District</option>
                                    <option value="Central and Western District">Central and Western District</option>
                                    <option value="Eastern District">Eastern District</option>
                                    <option value="Southern District">Southern District</option>
                                    <option value="Wan Chai District">Wan Chai District</option>
                                    <option value="Sham Shui Po District">Sham Shui Po District</option>
                                    <option value="Kowloon City District">Kowloon City District</option>
                                    <option value="Kwun Tong District">Kwun Tong District</option>
                                    <option value="Wong Tai Sin District">Wong Tai Sin District</option>
                                    <option value="Yau Tsim Mong District">Yau Tsim Mong District</option>
                                    <option value="Islands District">Islands District</option>
                                    <option value="Kwai Tsing District">Kwai Tsing District</option>
                                    <option value="North District">North District</option>
                                    <option value="Sai Kung District">Sai Kung District</option>
                                    <option value="Sha Tin District">Sha Tin District</option>
                                    <option value="Tai Po District">Tai Po District</option>
                                    <option value="Tsuen Wan District">Tsuen Wan District</option>
                                    <option value="Tuen Mun District">Tuen Mun District</option>
                                    <option value="Yuen Long District">Yuen Long District</option>
                                </select>
                            </div> */}

                            {/* Date of Birth */}
                            <div className="mb-4">
                                {/* <label
                                    htmlFor="dobDay"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Date of Birth
                                </label> */}
                                <div className="mb-4">
                                    <div className="flex mt-1">
                                        {/* <select
                                            id="dobDay"
                                            name="dobDay"
                                            value={formData.dobDay}
                                            onChange={handleChange}
                                            className="mr-2 lg:h-10 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                        >
                                            <option value="01">01</option>
                                            <option value="02">02</option>
                                            <option value="03">03</option>
                                            <option value="04">04</option>
                                            <option value="05">05</option>
                                            <option value="06">06</option>
                                            <option value="07">07</option>
                                            <option value="08">08</option>
                                            <option value="09">09</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                        </select> */}
                                        {/* <select
                                            id="dobMonth"
                                            name="dobMonth"
                                            value={formData.dobMonth}
                                            onChange={handleChange}
                                            className="mr-2 lg:h-10 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                        >
                                            <option value="">Month</option>
                                            <option value="01">January</option>
                                            <option value="02">February</option>
                                            <option value="03">March</option>
                                            <option value="04">April</option>
                                            <option value="05">May</option>
                                            <option value="06">June</option>
                                            <option value="07">July</option>
                                            <option value="08">August</option>
                                            <option value="09">September</option>
                                            <option value="10">October</option>
                                            <option value="11">November</option>
                                            <option value="12">December</option>
                                        </select> */}
                                        {/* <select
                                            id="dobYear"
                                            name="dobYear"
                                            value={formData.dobYear}
                                            onChange={handleChange}
                                            className="mr-2 lg:h-10 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                        > */}
                                        {/* <option value="1990">1990</option>
                                            <option value="1991">1991</option>
                                            <option value="1992">1992</option>
                                            */}
                                        {/* </select> */}
                                    </div>
                                </div>
                            </div>

                            {/* Ethnicity */}
                            {/* <div className="mb-4">
                                <label
                                    htmlFor="country"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Ethnicity
                                </label>
                                <select
                                    id="ethnicity"
                                    name="ethnicity"
                                    value={formData.ethnicity}
                                    onChange={handleChange}
                                    className="mt-1 lg:h-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                >
                                    <option value="">Select</option>
                                    <option value="Latin">Latin</option>
                                    <option value="Caucasian">Caucasian</option>
                                    <option value="Black">Black</option>
                                    <option value="White">White</option>
                                    <option value="MiddleEast">MiddleEast</option>
                                    <option value="Asian">Asian</option>

                               
                                </select>
                            </div> */}


                            {/* Look */}
                            {/* <div className="mb-4">
                                <label
                                    htmlFor="country"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Look
                                </label>
                                <select
                                    id="look"
                                    name="look"
                                    value={formData.look}
                                    onChange={handleChange}
                                    className="mt-1 lg:h-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                >
                                    <option value="">Select</option>
                                    <option value="NothingSpecial">Nothing Special</option>
                                    <option value="Average">Average</option>
                                    <option value="Sexy">Sexy</option>
                                    <option value="UltraSexy">Ultra Sexy</option>
                                    
                                </select>
                            </div> */}


                            {/* Hair */}
                            {/* <div className="mb-4">
                                <label
                                    htmlFor="country"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Hair Lenght
                                </label>
                                <select
                                    id="hair"
                                    name="hair"
                                    value={formData.hair}
                                    onChange={handleChange}
                                    className="mt-1 lg:h-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                >
                                    <option value="">Select</option>
                                    <option value="bold">Bold</option>
                                    <option value="long">Long</option>
                                    <option value="short">Short</option>
                                    
                                </select>
                            </div> */}


                            {/* Bust */}
                            {/* <div className="mb-4">
                                <label
                                    htmlFor="country"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Bust Size
                                </label>
                                <select
                                    id="bust"
                                    name="bust"
                                    value={formData.bust}
                                    onChange={handleChange}
                                    className="mt-1 lg:h-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                >
                                    <option value="">Select</option>
                                    <option value="VerySmall">Very Small</option>
                                    <option value="Small">Small</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Large">Large</option>
                                   
                                </select>
                            </div> */}

                            {/* Availability */}
                            {/* <div className="mb-4">
                                <span className="block text-sm font-medium text-gray-700">
                                    Availability
                                </span>
                                <div className="mt-1 flex">
                                    <input
                                        type="radio"
                                        id="female"
                                        name="availability"
                                        value="In Call"
                                        onChange={handleChange}
                                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                    />
                                    <label
                                        htmlFor="female"
                                        className="ml-2 block text-sm text-gray-900"
                                    >
                                        In Call
                                    </label>
                                    <input
                                        type="radio"
                                        id="male"
                                        name="availability"
                                        value="Out Call"
                                        onChange={handleChange}
                                        className="ml-4 focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                    />
                                    <label
                                        htmlFor="male"
                                        className="ml-2 block text-sm text-gray-900"
                                    >
                                        Out Call
                                    </label>
                                </div>
                            </div> */}

                            {/* Select Currency  */}

                            {/* <div className="mb-8">
                                <label
                                    htmlFor="currency"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Select Currency
                                </label>
                                <select
                                    id="currency"
                                    name="currency"
                                    value={formData.currency}
                                    onChange={handleChange}
                                    className="mt-1 lg:h-10 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                >
                                    <option value="">Select Currency</option>
                                    <option value="USD">US Dollar (USD)</option>
                                    <option value="EUR">Euro (EUR)</option>
                                    <option value="GBP">British Pound (GBP)</option>
                                    <option value="JPY">Japanese Yen (JPY)</option>
                                    <option value="AUD">Australian Dollar (AUD)</option>
                                    <option value="CAD">Canadian Dollar (CAD)</option>
                                    <option value="CHF">Swiss Franc (CHF)</option>
                                    <option value="CNY">Chinese Yuan (CNY)</option>
                                    <option value="SEK">Swedish Krona (SEK)</option>
                                    <option value="NZD">New Zealand Dollar (NZD)</option>
                                    <option value="KRW">South Korean Won (KRW)</option>
                                    <option value="SGD">Singapore Dollar (SGD)</option>
                                    <option value="NOK">Norwegian Krone (NOK)</option>
                                    <option value="MXN">Mexican Peso (MXN)</option>
                                    <option value="INR">Indian Rupee (INR)</option>
                                    <option value="RUB">Russian Ruble (RUB)</option>
                                    <option value="BRL">Brazilian Real (BRL)</option>
                                    <option value="TRY">Turkish Lira (TRY)</option>
                                    <option value="ZAR">South African Rand (ZAR)</option>
                                    <option value="HKD">Hong Kong Dollar (HKD)</option>
                                </select>
                            </div> */}

                            {/* Services  */}
                            {/* <div className="mb-8">
                                <h2 className="text-lg font-medium text-gray-700 mb-2">Services</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {Object.entries(formData.services).map(([service, checked]) => (
                                        <div key={service} className="flex items-center">
                                            <input
                                                type="checkbox"
                                                id={service}
                                                name={service}
                                                checked={checked}
                                                onChange={handleServiceChange}
                                                className="mr-2"
                                            />
                                            <label htmlFor={service} className="text-sm text-gray-700">{service}</label>
                                        </div>
                                    ))}
                                </div>
                            </div> */}
                            {/* Website */}
                            {/* <div className="mb-4">
                                <label
                                    htmlFor="website"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Extra services
                                </label>
                                <input
                                    type="text"
                                    id="extra"
                                    name="extra"
                                    value={formData.extra}
                                    onChange={handleChange}
                                    className="mt-1 lg:h-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div> */}
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

export default EscortRegister;
