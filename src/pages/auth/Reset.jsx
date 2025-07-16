import React, { useState } from "react";
import { MdPassword } from "react-icons/md";
import Card from "../../components/card/Card";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
// import { resetPassword } from "../../services/authService";

const initialState = {
  password: "",
  password2: "",
};

const Reset = () => {
  const [formData, setformData] = useState(initialState);
  const { password, password2 } = formData;
  const { resetToken } = useParams();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const reset = async (e) => {
    e.preventDefault();

    // if (password.length < 6) {
    //   return toast.error("Passwords must be up to 6 characters");
    // }
    // if (password !== password2) {
    //   return toast.error("Passwords do not match");
    // }

    // const userData = {
    //   password,
    //   password2,
    // };

    // try {
    //   const data = await resetPassword(userData, resetToken);
    //   toast.success(data.message);
    // } catch (error) {
    //   console.log(error.message);
    // }
  };

  return (
    <div className="min-h-[80vh] flex justify-center items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Card>
        <div className="w-full max-w-md p-6 bg-white animate-[slide-up_0.5s_ease]">
          <div className="flex justify-center">
            <MdPassword size={35} className="text-gray-500" />
          </div>
          <h2 className="text-center text-2xl font-bold my-4">Reset Password</h2>

          <form onSubmit={reset} className="space-y-4">
            <input
              type="password"
              placeholder="New Password"
              required
              name="password"
              value={password}
              onChange={handleInputChange}
              className="block w-full p-3 text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              required
              name="password2"
              value={password2}
              onChange={handleInputChange}
              className="block w-full p-3 text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
            />

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors duration-200"
            >
              Reset Password
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

export default Reset;