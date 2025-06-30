

import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "", remember: false });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (form.email === "admin@example.com" && form.password === "password") {
      navigate("/");
    } else {
      setError("Invalid credentials (try admin@example.com / password)");
    }
  };

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${isActive ? "text-indigo-600" : "text-gray-700 hover:text-indigo-600"}`;

  return (
    <main className="min-h-screen w-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-auto">
      <header className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-sm z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <NavLink to="/" className="text-xl font-bold text-indigo-600">
            MyStore
          </NavLink>
          <nav className="hidden gap-6 md:flex">
            <NavLink to="/" className={navLinkClass} end>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              Product
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/clothes" className={navLinkClass}>
              Contact
            </NavLink>
            <NavLink to="/login" className={navLinkClass}>
              Login
            </NavLink>
          </nav>
        </div>
      </header>

      <div className="flex min-h-screen w-full items-center justify-center p-4 pt-28 md:pt-32">
        <div className="w-full max-w-md rounded-xl bg-white/90 p-8 shadow-2xl backdrop-blur-md">
          <h1 className="mb-8 text-center text-3xl font-bold text-indigo-600">Welcome Back</h1>

          {error && (
            <div className="mb-4 rounded-md bg-red-100 px-4 py-2 text-sm text-red-700">
              {error}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="mb-1 block font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-md border-gray-300 px-4 py-2 focus:border-indigo-600 focus:ring-indigo-600"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-1 block font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full rounded-md border-gray-300 px-4 py-2 focus:border-indigo-600 focus:ring-indigo-600"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="remember"
                  checked={form.remember}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                Remember me
              </label>
              <NavLink to="/forgot-password" className="text-indigo-600 hover:underline">
                Forgot password?
              </NavLink>
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-indigo-600 py-2 font-medium text-white transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Sign In
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don’t have an account?{' '}
            <NavLink to="/signup" className="text-indigo-600 hover:underline">
              Sign up
            </NavLink>
          </p>
        </div>
      </div>
    </main>
  );
}