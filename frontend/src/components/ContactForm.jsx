import React, { useState } from "react";

const ContactForm = () => {
  const FORM_ENDPOINT = "https://formspree.io/f/xreaqqpb";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    state: "idle",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({ state: "sending", message: "Sending..." });

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus({ state: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          setStatus({ state: "idle", message: "" });
        }, 3000);
      } else {
        const data = await res.json().catch(() => null);
        const errMsg =
          data?.errors?.[0]?.message || "Something went wrong. Please try again.";
        setStatus({ state: "error", message: errMsg });
      }
    } catch (err) {
        console.error(err);
        setStatus({
            state: "error",
            message: "Network error. Please check your internet and try again.",
        });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-gray-300 mb-2">
          Your Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-gray-300 mb-2">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-gray-300 mb-2">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={status.state === "sending"}
        className="w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status.state === "sending" ? "Sending..." : "Send"}
      </button>

      {status.state !== "idle" && (
        <p
          className={`text-sm ${
            status.state === "success" ? "text-green-400" : "text-red-400"
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
