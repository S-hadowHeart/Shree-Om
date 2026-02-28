import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Dropdown open/close state for profile menu
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleLogout() {
    logout();
    setDropdownOpen(false);
    navigate("/");
  }

  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6 h-16">

          {/* Logo */}
          <Link to="/">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-md flex items-center justify-center text-white font-extrabold">
                SO
              </div>
              <div className="leading-none">
                <h2 className="text-sm font-semibold text-slate-900">Shree Om</h2>
                <div className="text-xs text-gray-400">Hardware</div>
              </div>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-2xl relative">
              <input
                className="w-full rounded-full border border-gray-200 py-3 pl-4 pr-12 shadow-sm focus:outline-none"
                type="text"
                placeholder="Search for door handles, locks, hinges..."
                aria-label="Search"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-sm bg-white border rounded-full w-8 h-8 flex items-center justify-center shadow-sm">
                🔍
              </button>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-6">
            {/* Nav Links */}
            <nav className="hidden md:flex gap-6 items-center">
              <Link to="/" className="text-sm text-slate-800 hover:text-orange-500">Home</Link>
              <Link to="/products" className="text-sm text-slate-800 hover:text-orange-500">Products</Link>
              <Link to="/about" className="text-sm text-slate-800 hover:text-orange-500">About</Link>
              <Link to="/contact" className="text-sm text-slate-800 hover:text-orange-500">Contact</Link>
            </nav>

            {/* Icons + Auth */}
            <div className="flex items-center gap-3">
              {/* Wishlist */}
              <button aria-label="Wishlist" className="p-2 rounded-md hover:text-orange-500">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 00-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 000-7.8z" stroke="#374151" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Cart */}
              <button aria-label="Cart" className="p-2 rounded-md hover:text-orange-500">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 6h15l-1.5 9h-12z" stroke="#374151" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="10" cy="20" r="1" fill="#374151" />
                  <circle cx="18" cy="20" r="1" fill="#374151" />
                </svg>
              </button>

              {/* ── LOGGED OUT: Show Login + Register buttons ── */}
              {!user && (
                <div className="flex items-center gap-2">
                  <Link
                    to="/login"
                    className="text-sm text-slate-700 border border-gray-300 px-3 py-1.5 rounded-md hover:border-orange-500 hover:text-orange-500 transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="text-sm bg-orange-500 text-white px-3 py-1.5 rounded-md hover:bg-orange-600 transition-colors"
                  >
                    Register
                  </Link>
                </div>
              )}

              {/* ── LOGGED IN: Show Profile button with dropdown ── */}
              {user && (
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-2 p-1.5 rounded-md hover:bg-orange-50 transition-colors"
                    aria-label="Profile"
                  >
                    {/* Avatar circle with first letter of name */}
                    <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-semibold">
                      {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                    </div>
                    <span className="hidden md:block text-sm font-medium text-slate-700">
                      {user.name.split(" ")[0]}
                    </span>
                    {/* Chevron */}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}>
                      <path d="M6 9l6 6 6-6" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
                      {/* User info */}
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-sm font-semibold text-slate-800">{user.name}</p>
                        <p className="text-xs text-gray-400 truncate">{user.email}</p>
                      </div>

                      {/* Menu items */}
                      <Link
                        to="/profile"
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-500"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 12a4 4 0 100-8 4 4 0 000 8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M4 20a8 8 0 0116 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                        My Profile
                      </Link>

                      <Link
                        to="/orders"
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-500"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                        My Orders
                      </Link>

                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-500 hover:bg-red-50"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
