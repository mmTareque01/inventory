import React, { useState } from "react";
import { BiLogIn } from "react-icons/bi";
import Card from "../../components/card/Card";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
// import { loginUser, validateEmail } from "../../services/authService";
// import { SET_LOGIN, SET_NAME } from "../../redux/features/auth/authSlice";
import Loader from "../../components/loader/Loader";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setformData] = useState(initialState);
  const { email, password } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const login = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("All fields are required");
    }

    // if (!validateEmail(email)) {
    //   return toast.error("Please enter a valid email");
    // }

    const userData = {
      email,
      password,
    };
    setIsLoading(true);
    try {
      // const data = await loginUser(userData);
      // console.log(data);
      // await dispatch(SET_LOGIN(true));
      // await dispatch(SET_NAME(data.name));
      navigate("/dashboard");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex justify-center items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {isLoading && <Loader />}
      <Card>
        <div className="w-full max-w-md p-6 bg-white animate-[slide-up_0.5s_ease]">
          <div className="flex justify-center">
            <BiLogIn size={35} className="text-gray-500" />
          </div>
          <h2 className="text-center text-red-500 text-2xl font-bold my-4">Login</h2>

          <form onSubmit={login} className="space-y-4">
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
            <button 
              type="submit" 
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors duration-200"
            >
              Login
            </button>
          </form>
          <div className="mt-4 text-center">
            <Link to="/forgot" className="text-blue-500 hover:text-blue-600 text-sm">
              Forgot Password
            </Link>
          </div>

          <div className="flex justify-center items-center mt-4 text-sm">
            <Link to="/" className="text-blue-500 hover:text-blue-600">Home</Link>
            <p className="mx-2 text-gray-600">Don't have an account?</p>
            <Link to="/register" className="text-blue-500 hover:text-blue-600">Register</Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Login;