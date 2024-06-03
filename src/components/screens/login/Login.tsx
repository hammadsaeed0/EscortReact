import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: val,
    }));
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    const raw = JSON.stringify({
      email: formData.email,
      password: formData.password,
    });
  
    const requestOptions: RequestInit = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow" as RequestRedirect, // Ensure the type is correct
    };
  
    fetch("https://hongkongbackend.vercel.app/v1/login", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result);
  
        if (data.success) {
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("user", data.data._id);
          window.location.href = '/escortProfile';
        } else {
          toast.error(data.error);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary flex-col">
      <h2 className="text-4xl text-white hover:text-blue font-bold text-center mb-4">
        Hong Kong Escort Service
      </h2>

      <div className="bg-white p-8 rounded-lg w-full max-w-md">
        <Toaster />

        <form onSubmit={handleSubmit}>
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
              autoComplete="off"
              className="mt-1 h-12 w-full  border-secondary border rounded-md px-3 py-2"
            />
          </div>
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
              autoComplete="off"
              className="mt-1 h-12 w-full  border-secondary border rounded-md px-3 py-2"
            />
          </div>

          <div className="text-center mb-4">
            {/* <button
                            type="submit"
                            className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Login
                        </button> */}
            <button className="bg-gradient-to-r from-secondary to-blue text-white w-[200px] h-[30px] rounded shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition duration-300 ease-in-out">
              <p className="text-[14px]">Login</p>
            </button>
          </div>
        </form>
        <div className="text-center text-sm">
          <a href="#" className="text-blue-600 hover:underline">
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
