import React from "react";
import { RiProductHuntLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import heroImg from "../../assets/inv-img.png";

const Home = () => {
  return (
    <div className="bg-[#030b6b] min-h-screen">
      {/* Navbar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
        <div className="logo text-white mb-4 md:mb-0">
          <RiProductHuntLine size={35} />
        </div>

        <ul className="flex items-center space-x-4">
          {/* <ShowOnLogout> */}
            <li>
              <Link to="/register" className="text-white hover:text-gray-300 text-sm md:text-base">
                Register
              </Link>
            </li>
          {/* </ShowOnLogout> */}
          {/* <ShowOnLogout> */}
            <li>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded text-sm md:text-base">
                <Link to="/login">Login</Link>
              </button>
            </li>
          {/* </ShowOnLogout> */}
          {/* <ShowOnLogin> */}
            <li>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded text-sm md:text-base">
                <Link to="/dashboard">Dashboard</Link>
              </button>
            </li>
          {/* </ShowOnLogin> */}
        </ul>
      </nav>
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
        <div className="w-full md:w-1/2 text-white space-y-6 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            Inventory {"&"} Stock Management Solution
          </h2>
          <p className="text-base sm:text-lg">
            Inventory system to control and manage products in the warehouse in
            real time and integrated to make it easier to develop your business.
          </p>
          <div className="hero-buttons">
            <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-6 rounded">
              <Link to="/dashboard">Free Trial 1 Month</Link>
            </button>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-8">
            <NumberText num="14K" text="Brand Owners" />
            <NumberText num="23K" text="Active Users" />
            <NumberText num="500+" text="Partners" />
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <img src={heroImg} alt="Inventory" className="w-full max-w-md mx-auto md:max-w-none" />
        </div>
      </section>
    </div>
  );
};

const NumberText = ({ num, text }) => {
  return (
    <div className="text-center md:text-left">
      <h3 className="text-2xl font-bold text-white">{num}</h3>
      <p className="text-white text-sm md:text-base">{text}</p>
    </div>
  );
};

export default Home;