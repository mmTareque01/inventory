import React, { useState } from "react";
import { toast } from "react-toastify";
// import { changePassword } from "../../services/authService";
import Card from "../card/Card";
import { useNavigate } from "react-router-dom";

const initialState = {
  oldPassword: "",
  password: "",
  password2: "",
};

const ChangePassword = () => {
  const navigate = useNavigate();
  const [formData, setformData] = useState(initialState);
  const { oldPassword, password, password2 } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const changePass = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      return toast.error("New passwords do not match");
    }

    const formData = {
      oldPassword,
      password,
    };

    // const data = await changePassword(formData);
    // toast.success(data);
    navigate("/profile");
  };

  return (
    <div className="w-[300px]">
      <Card className="p-4 border-2 border-red-500">
        <h3 className="text-xl font-semibold mb-4">Change Password</h3>
        <form onSubmit={changePass} className="space-y-4">
          <input
            type="password"
            placeholder="Old Password"
            required
            name="oldPassword"
            value={oldPassword}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-400 rounded"
          />
          <input
            type="password"
            placeholder="New Password"
            required
            name="password"
            value={password}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-400 rounded"
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            required
            name="password2"
            value={password2}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-400 rounded"
          />
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Change Password
          </button>
        </form>
      </Card>
    </div>
  );
};

export default ChangePassword;