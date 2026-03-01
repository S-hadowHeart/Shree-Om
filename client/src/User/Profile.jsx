import React, { useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const stored = typeof window !== "undefined" ? localStorage.getItem("user") : null;
  const user = stored
    ? JSON.parse(stored)
    : { name: "", email: "", phone: "" };

  const [name, setName] = useState(user.name || "");
  const [email] = useState(user.email || "");
  const [phone, setPhone] = useState(user.phone || "");
  const [message, setMessage] = useState("");

  const initial = (user.name && user.name[0]) ? user.name[0].toUpperCase() : "U";

  const handleSave = (e) => {
    e.preventDefault();
    const updated = { ...user, name, phone };
    localStorage.setItem("user", JSON.stringify(updated));
    setMessage("Profile updated successfully");
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="px-6 py-8 max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">My Dashboard</h2>

      <div className="flex gap-8">
        {/* Sidebar */}
        <aside className="w-72 bg-white rounded-lg border p-6 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-16 w-16 rounded-full bg-orange-500 flex items-center justify-center text-white text-2xl font-bold">{initial}</div>
            <div>
              <div className="font-semibold">{user.name}</div>
              <div className="text-sm text-gray-500">{user.email}</div>
            </div>
          </div>

          <nav className="mt-4 space-y-2">
            <Link to="#" className="block px-3 py-2 rounded-md bg-orange-500 text-white">Dashboard</Link>
            <Link to="/my-orders" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">My Orders</Link>
            <Link to="/wishlist" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">Wishlist</Link>
            <Link to="/profile" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">Profile</Link>
            <Link to="/reset-password" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">Reset Password</Link>
            <button className="block px-3 py-2 rounded-md text-red-600 hover:bg-gray-50">Logout</button>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 bg-white rounded-lg border p-6">
          <h3 className="text-xl font-semibold mb-4">Profile</h3>

          {message && <div className="text-green-600 mb-4">{message}</div>}

          <form onSubmit={handleSave} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={email}
                  disabled
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600"
              >
                Save Changes
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Profile;
