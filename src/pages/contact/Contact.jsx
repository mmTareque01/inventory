import React, { useState } from "react";
import Card from "../../components/card/Card";
import { FaPhoneAlt, FaEnvelope, FaTwitter } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { toast } from "react-toastify";
import axios from "axios";
// import { BACKEND_URL } from "../../services/authService";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const data = {
    subject,
    message,
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    // try {
    //   const response = await axios.post(`${BACKEND_URL}/api/contactus`, data);
    //   setSubject("");
    //   setMessage("");
    //   toast.success(response.data.message);
    // } catch (error) {
    //   toast.error(error.message);
    // }
  };

  return (
    <div className="p-4">
      <h3 className="mt-4 text-2xl font-semibold">Contact Us</h3>
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <form onSubmit={sendEmail} className="w-full md:w-[500px] md:max-w-[500px] mb-4 md:mr-4">
          <Card className="p-4 border border-gray-300 rounded">
            <label className="block text-lg font-medium">Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="block w-full p-4 my-2 text-base border border-gray-400 rounded outline-none"
            />
            <label className="block text-lg font-medium">Message</label>
            <textarea
              cols="30"
              rows="10"
              name="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="block w-full p-4 my-2 text-base border border-gray-400 rounded outline-none min-h-[200px]"
            ></textarea>
            <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
              Send Message
            </button>
          </Card>
        </form>

        <div className="flex-1">
          <Card className="p-8 bg-blue-600 text-white rounded">
            <h3 className="text-xl font-semibold text-white">Our Contact Information</h3>
            <p className="text-white">Fill the form or contact us via other channels listed below</p>

            <div className="my-8 space-y-4">
              <span className="flex items-center">
                <FaPhoneAlt className="mr-2" />
                <p>070123123123</p>
              </span>
              <span className="flex items-center">
                <FaEnvelope className="mr-2" />
                <p>Support@tareque.com</p>
              </span>
              <span className="flex items-center">
                <GoLocation className="mr-2" />
                <p>Tareque, Bangladesh</p>
              </span>
              <span className="flex items-center">
                <FaTwitter className="mr-2" />
                <p>@mmtareque</p>
              </span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;