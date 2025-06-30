import React from "react";
import { NavLink } from "react-router-dom";

export default function About() {
  const navLink =
    "text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors";

  return (
    <main className="bg-white text-gray-800 scroll-smooth">
      {/* ─────────  Navigation Bar ───────── */}
      <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-30">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <NavLink to="/" className="text-xl font-bold text-indigo-600">
            MyStore
          </NavLink>
          <nav className="hidden gap-6 md:flex">
            <NavLink to="/" className={navLink} end>
              Home
            </NavLink>
            <NavLink to="/about" className={navLink}>
              Product
            </NavLink>
            <NavLink to="/clothes" className={navLink}>
              About
            </NavLink>
            <NavLink to="/contact" className={navLink}>
              Contact
            </NavLink>
            <NavLink to="/contact" className={navLink}>
              Login
            </NavLink>
          </nav>
        </div>
      </header>

      <section className="relative h-screen w-screen overflow-hidden pt-16">
        {/* Background */}
        <img
          src="https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=1920&q=80"
          alt="Denim stack"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

        <div className="relative z-10 flex flex-col h-full items-center justify-center space-y-6">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">About MyStore</h1>

          <a
            href="#story"
            className="hover:text-indigo-300 text-white group"
            aria-label="Read about us"
          >
            <span className="flex flex-col items-center animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
              <span className="mt-1 text-sm font-medium tracking-wide group-hover:underline">Read about me</span>
            </span>
          </a>
        </div>
      </section>

      {/* ---------- Our Story ---------- */}
      <section id="story" className="p-4">
        <h2 className="text-xl font-semibold mb-2">Our Story</h2>
        <p className="leading-relaxed text-sm">
          <strong>MyStore</strong> began in 2023 with one goal — to make everyday essentials that feel anything but basic. What started with a handful of tees has grown into a curated wardrobe shipped worldwide, all while staying true to three pillars: comfort, sustainability, and an honest price tag.
        </p>
      </section>

      {/* ---------- Mission ---------- */}
      <section className="bg-gray-50 p-4">
        <div className="grid gap-4 sm:grid-cols-3 text-center text-sm">
          {[
            {
              title: "Comfort First",
              body: "From fiber to fit, every detail is engineered for all‑day wear.",
            },
            {
              title: "Fair Pricing",
              body: "No middlemen, no mark‑ups. Premium quality that doesn’t break the bank.",
            },
            {
              title: "Planet‑Smart",
              body: "Organic cotton, recycled mailers, and a plan to be carbon‑neutral by 2026.",
            },
          ].map(({ title, body }) => (
            <div key={title}>
              <h3 className="font-semibold mb-1">{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Team ---------- */}
      <section className="p-4">
        <h2 className="text-xl font-semibold text-center mb-4">Meet the Team</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-sm">
          {[
            {
              name: "Riya Sharma",
              role: "Founder & CEO",
              img: "https://randomuser.me/api/portraits/women/45.jpg",
            },
            {
              name: "Rupak Kumar",
              role: "Head of Design",
              img: "https://randomuser.me/api/portraits/men/46.jpg",
            },
            {
              name: "Neha Singh",
              role: "Sustainability Lead",
              img: "https://randomuser.me/api/portraits/women/47.jpg",
            },
            {
              name: "Keshav Kumar",
              role: "Engineering Manager",
              img: "https://randomuser.me/api/portraits/men/48.jpg",
            },
          ].map(({ name, role, img }) => (
            <figure key={name} className="text-center">
              <img src={img} alt={name} className="mx-auto mb-2 h-24 w-24 rounded-full object-cover shadow-md" />
              <figcaption>
                <h3 className="font-medium">{name}</h3>
                <p className="text-gray-500">{role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* --- Call to Action ---*/}
      <section className="bg-indigo-600 text-white p-4 text-center">
        <h2 className="text-xl font-semibold mb-2">Ready to upgrade your wardrobe?</h2>
        <NavLink to="/clothes" className="inline-block bg-white text-indigo-600 px-4 py-2 rounded-md shadow hover:bg-gray-100">
          Shop Now
        </NavLink>
      </section>
    </main>
  );
}
