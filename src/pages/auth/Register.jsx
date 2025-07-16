import React, { useState } from "react";
import { TiUserAddOutline } from "react-icons/ti";
import Card from "../../components/card/Card";
import { toast } from "react-toastify";
// import { registerUser, validateEmail } from "../../services/authService";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { SET_LOGIN, SET_NAME } from "../../redux/features/auth/authSlice";
import Loader from "../../components/loader/Loader";

const initialState = {
  name: "",
  email: "",
  password: "",
  password2: "",
};

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setformData] = useState(initialState);
  const { name, email, password, password2 } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const register = async (e) => {
    e.preventDefault();

    // if (!name || !email || !password) {
    //   return toast.error("All fields are required");
    // }
    // if (password.length < 6) {
    //   return toast.error("Passwords must be up to 6 characters");
    // }
    // if (!validateEmail(email)) {
    //   return toast.error("Please enter a valid email");
    // }
    // if (password !== password2) {
    //   return toast.error("Passwords do not match");
    // }

    // const userData = {
    //   name,
    //   email,
    //   password,
    // };
    // setIsLoading(true);
    // try {
    //   const data = await registerUser(userData);
    //   await dispatch(SET_LOGIN(true));
    //   await dispatch(SET_NAME(data.name));
    //   navigate("/dashboard");
    //   setIsLoading(false);
    // } catch (error) {
    //   setIsLoading(false);
    // }
  };

  return (
    <div className="min-h-[80vh] flex justify-center items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {isLoading && <Loader />}
      <Card>
        <div className="w-full max-w-md p-6 bg-white animate-[slide-up_0.5s_ease]">
          <div className="flex justify-center">
            <TiUserAddOutline size={35} className="text-gray-500" />
          </div>
          <h2 className="text-center text-2xl font-bold my-4">Register</h2>

          <form onSubmit={register} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              required
              name="name"
              value={name}
              onChange={handleInputChange}
              className="block w-full p-3 text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
            />
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              value={email}
              onChange={handleInputChange}
              className="block w-full p-3 text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
            />
            <input
              type="password"
              placeholder="Password"
              required
              name="password"
              value={password}
              onChange={handleInputChange}
              className="block w-full p-3 text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
            />
            <input
              type="password"
              placeholder="Confirm Password"
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
              Register
            </button>
          </form>

          <div className="flex justify-center items-center mt-4 text-sm">
            <Link to="/" className="text-blue-500 hover:text-blue-600">Home</Link>
            <p className="mx-2 text-gray-600">Already have an account?</p>
            <Link to="/login" className="text-blue-500 hover:text-blue-600">Login</Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Register;