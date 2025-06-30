

import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setSent(true);
  };

  return (
    <main
      className="min-h-screen w-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:

         "url(https:images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1920&q=80)",
      }}
    >
      <div className="min-h-screen w-full bg-black bg-opacity-50 flex items-center justify-center px-4 py-20">
        {sent ? (
          <div className="text-center max-w-lg mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4">Thank you!</h2>
            <p className="text-white/90 mb-8">
              Your message has been sent successfully. We'll be in touch soon.
            </p>
            <button
              onClick={() => setSent(false)}
              className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-6 py-3 rounded-md shadow"
            >
              Send Another Message
            </button>
            <NavLink
              to="/"
              className="block mt-6 text-white underline text-sm hover:text-blue-300"
            >
              Back to Home
            </NavLink>
          </div>
        ) : (
          <div className="w-full max-w-4xl mx-auto grid gap-10 md:grid-cols-2">
            {/* Contact info */}
            <section className="text-white space-y-6 self-center">
              <h2 className="text-4xl font-bold leading-tight">Get in touch</h2>
              <p className="text-white/90">
                We'd love to hear from you! Whether you have a question about our
                products, pricing, or anything else, our team is ready to answer
                all your questions.
              </p>
              <ul className="space-y-3 text-lg">
                <li>
                  📞 <span className="ml-2">+91 6299361809</span>
                </li>
                <li>
                  ✉️ <span className="ml-2">rupakk746@gmail.com</span>
                </li>
                <li>
                  📍 <span className="ml-2">NIMS University Rajasthan,Jaipur</span>
                </li>
              </ul>
            </section>

            {/* Contact form */}
            <form
              onSubmit={handleSubmit}
              className="bg-black/90 backdrop-blur-sm rounded-lg shadow-xl p-8 space-y-6"
            >
              <div>
                <label className="block mb-1 font-medium" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 px-4 py-2 focus:border-blue-600 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 px-4 py-2 focus:border-blue-600 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 px-4 py-2 focus:border-blue-600 focus:ring-blue-600"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        )}
      </div>
    </main>
  );
}
