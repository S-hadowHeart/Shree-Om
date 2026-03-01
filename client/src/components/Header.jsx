import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6 h-16">
          
          <Link to="/">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-md flex items-center justify-center text-white font-extrabold">
                SO
              </div>
              <div className="leading-none">
                <h2 className="text-sm font-semibold text-slate-900">
                  Shree Om
                </h2>
                <div className="text-xs text-gray-400">Hardware</div>
              </div>
            </div>
          </Link>

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

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-6 items-center">
              <Link
                to="/"
                className="text-sm text-slate-800 hover:text-orange-500"
              >
                Home
              </Link>
              <Link
                to="/products"
                className="text-sm text-slate-800 hover:text-orange-500"
              >
                Products
              </Link>
              <Link
                to="/about"
                className="text-sm text-slate-800 hover:text-orange-500"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-sm text-slate-800 hover:text-orange-500"
              >
                Contact
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <Link
                to="/wishlist"
                aria-label="Wishlist"
                className="p-2 rounded-md hover:text-orange-500"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 00-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 000-7.8z"
                    stroke="#374151"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link
                to="/cart"
                aria-label="Cart"
                className="p-2 rounded-md hover:text-orange-500"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 6h15l-1.5 9h-12z"
                    stroke="#374151"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="10" cy="20" r="1" fill="#374151" />
                  <circle cx="18" cy="20" r="1" fill="#374151" />
                </svg>
              </Link>
              <Link
                to="/login"
                aria-label="Account"
                className="p-2 rounded-md hover:text-orange-500"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 12a4 4 0 100-8 4 4 0 000 8z"
                    stroke="#374151"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 20a8 8 0 0116 0"
                    stroke="#374151"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
