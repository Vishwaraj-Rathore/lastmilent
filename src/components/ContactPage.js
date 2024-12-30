import React from "react";
import { cormorantGaramond } from "../app/fonts/fonts";

const ContactPage = () => {
  return (
    <div
      className={`w-full min-h-[calc(100vh-80px)] bg-[#1a2844] flex items-center ${cormorantGaramond.className}`}
    >
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="text-white lg:pl-4">
          <h1 className="text-4xl mb-6">Contact Us</h1>
          <p className="text-lg opacity-90 max-w-md">
            We value your feedback, inquiries, and suggestions. Our dedicated
            team is ready to assist you in any way we can. Whether you have a
            question about our products, need assistance with an order, or want
            to share your thoughts, we are here to listen and provide the
            support you need.
          </p>
        </div>

        <div className="bg-white p-8 shadow-lg max-w-md mx-auto w-full">
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500"
            />

            <textarea
              placeholder="Message"
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500 resize-none"
              rows={4}
            />

            <select className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500">
              <option value="1">SunBless</option>
              <option value="2">Fair Lane</option>
              <option value="3">Just Corseca</option>
            </select>

            <button
              type="submit"
              className="w-full bg-[#1a2844] text-white py-3 hover:bg-[#2a3854] transition-colors"
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
