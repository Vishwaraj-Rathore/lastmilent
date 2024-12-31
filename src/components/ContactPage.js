import React from "react";
import { cormorantGaramond } from "../app/fonts/fonts";

const ContactPage = () => {
  return (
    <div
      className={`w-full min-h-[calc(100vh-80px)] bg-white flex items-center ${cormorantGaramond.className} py-8 pb-16 md:pb-8`}
    >
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4">
        <div className="text-center lg:text-left lg:pl-4">
          <h1 className="text-4xl mb-6 text-gray-900">Contact Us</h1>
          <p className="text-lg opacity-90 max-w-md mx-auto lg:mx-0 text-gray-700">
            We value your feedback, inquiries, and suggestions. Our dedicated
            team is ready to assist you in any way we can. Whether you have a
            question about our products, need assistance with an order, or want
            to share your thoughts, we are here to listen and provide the
            support you need.
          </p>
        </div>

        <div className="bg-[#1a2844] p-8 shadow-lg w-full max-w-md mx-auto">
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500 bg-transparent text-white placeholder-gray-300"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500 bg-transparent text-white placeholder-gray-300"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500 bg-transparent text-white placeholder-gray-300"
            />

            <textarea
              placeholder="Message"
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500 resize-none bg-transparent text-white placeholder-gray-300"
              rows={4}
            />

            <select className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500 bg-transparent text-white">
              <option value="1" className="text-gray-900">
                SunBless
              </option>
              <option value="2" className="text-gray-900">
                Fair Lane
              </option>
              <option value="3" className="text-gray-900">
                Just Corseca
              </option>
            </select>

            <button
              type="submit"
              className="w-full bg-white text-[#1a2844] py-3 hover:bg-gray-100 transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
