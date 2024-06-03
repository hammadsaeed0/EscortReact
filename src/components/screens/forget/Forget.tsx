import React, { useState } from "react";

const Forgot = () => {
    const [email, setEmail] = useState("");

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle the submission here, such as sending a reset password email
        console.log("Reset password email sent to:", email);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-primary flex-col">
            <h2 className="text-4xl text-white hover:text-blue font-bold text-center mb-4">
                Hong Kong Escort Service
            </h2>

            <div className="bg-white p-8 rounded-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-4">Forgot Password</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <p className="text-gray-700 mb-2">
                            Please enter your email address or username. We'll send you a link to reset your password.
                        </p>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            autoComplete="off"
                            className="mt-1 h-12 w-full border-secondary border rounded-md px-3 py-2"
                            placeholder="Email or Username"
                        />
                    </div>
                    <div className="text-center mb-4">
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-secondary to-blue text-white py-3 px-6 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition duration-300 ease-in-out"
                        >
                            Reset Password
                        </button>
                    </div>
                </form>
                <div className="text-center text-sm">
                    <a href="#" className="text-blue-600 hover:underline">
                        Back to Login
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Forgot;
