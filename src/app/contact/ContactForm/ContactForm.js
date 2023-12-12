"use client";
import React, { useState } from "react";

const baseUrl = process.env.BASE_URL;

const ContactForm = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
      const response = await fetch(`${baseUrl}/contact-save`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSuccessMessage("Message sent successfully!");
      } else {
        setSuccessMessage("An error occurred. Please try again later.");
      }
    } catch (error) {
      setSuccessMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="px-6 md:px-10 lg:px-20">
      <div
        className="p-6 md:p-12 lg:p-20 w-full md:w-8/10 lg:w-3/5 mx-auto rounded-lg"
        style={{ boxShadow: "0px 0px 139px 0px rgba(0, 0, 0, 0.1)" }}
      >
        {successMessage && (
          <p className="text-green-500 text-center">{successMessage}</p>
        )}
        <p className="uppercase text-blue-500 text-center font-semibold mb-4">
          request a quote{" "}
        </p>
        <h2 className="text-center text-black text-3xl font-semibold mb-8">
          How May We Help You!
        </h2>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="flex flex-row gap-6">
            <input
              className="px-3 py-4 border rounded-md border-gray-300 w-1/2 text-black"
              type="text"
              placeholder="Name *"
              name="name"
            />
            <input
              className="px-3 py-4 border rounded-md border-gray-300 w-1/2 text-black"
              type="email"
              placeholder="Email *"
              name="email"
            />
          </div>
          <input
            className="px-3 py-4 border rounded-md border-gray-300 w-full text-black"
            type="text"
            placeholder="Subject *"
            name="subject"
          />
          <textarea
            className="px-3 py-4 border rounded-md border-gray-300 w-full text-black"
            rows={5}
            placeholder="Write A Message"
            name="message"
          />

          <button className="mx-auto py-4 px-20 lg:px-36 border font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-white outline-0 rounded-lg">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
