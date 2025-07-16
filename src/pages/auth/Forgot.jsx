import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";
// import { forgotPassword, validateEmail } from "../../services/authService";
import { toast } from "react-toastify";

const Forgot = () => {
  const [email, setEmail] = useState("");

  const forgot = async (e) => {
    e.preventDefault();
    // if (!email) {
    //   return toast.error("Please enter an email");
    // }

    // if (!validateEmail(email)) {
    //   return toast.error("Please enter a valid email");
    // }

    // const userData = {
    //   email,
    // };

    // await forgotPassword(userData);
    // setEmail("");
  };

  return (
    <div className="min-h-[80vh] flex justify-center items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Card>
        <div className="w-full max-w-md p-6 bg-white animate-[slide-up_0.5s_ease]">
          <div className="flex justify-center">
            <AiOutlineMail size={35} className="text-gray-500" />
          </div>
          <h2 className="text-center text-2xl font-bold my-4">Forgot Password</h2>

          <form onSubmit={forgot} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full p-3 text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
            />

            <button 
              type="submit" 
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors duration-200"
            >
              Get Reset Email
            </button>

            <div className="flex justify-between mt-4 text-sm">
              <p>
                <Link to="/" className="text-blue-500 hover:text-blue-600">- Home</Link>
              </p>
              <p>
                <Link to="/login" className="text-blue-500 hover:text-blue-600">- Login</Link>
              </p>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Forgot;