import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 text-white rounded-md flex items-center justify-center font-bold">SO</div>
            <div>
              <h3 className="text-lg font-semibold">Shree Om Hardware</h3>
              <div className="text-sm text-gray-400">Premium Quality</div>
            </div>
          </div>

          <p className="mt-4 text-sm text-gray-600">Manufacturing premium quality door handles, locks, hinges, and hardware parts since 2010.</p>

          <div className="mt-4 flex gap-3 text-xl">
            <a href="#" aria-label="facebook" className="text-gray-500 hover:text-blue-600">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5V9a3.5 3.5 0 013.8-3.8h2v3h-2c-.6 0-1.2.6-1.2 1.2V12H20l-1.5 3h-2.5v7A10 10 0 0022 12z" fill="#374151"/></svg>
            </a>
            <a href="#" aria-label="twitter" className="text-gray-500 hover:text-sky-500">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 5.9c-.6.3-1.2.6-1.9.7.7-.4 1.2-1 1.5-1.7-.7.4-1.4.6-2.2.8A3.7 3.7 0 0016.5 5c-2 0-3.6 1.7-3.6 3.7 0 .3 0 .6.1.9-3-.2-5.6-1.6-7.4-3.8-.3.5-.5 1-.5 1.6 0 1.3.6 2.4 1.6 3-.5 0-1-.2-1.4-.4v.1c0 1.8 1.3 3.4 3.1 3.8-.3.1-.6.1-.9.1-.2 0-.5 0-.7-.1.5 1.6 2 2.8 3.7 2.8A7.5 7.5 0 013 19.5 10.6 10.6 0 0010 21c6.5 0 10-5.4 10-10.1v-.5c.7-.5 1.4-1.2 1.9-2z" fill="#374151"/></svg>
            </a>
            <a href="#" aria-label="instagram" className="text-gray-500 hover:text-pink-500">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="5" stroke="#374151" strokeWidth="1.2"/><path d="M12 8.4a3.6 3.6 0 100 7.2 3.6 3.6 0 000-7.2z" stroke="#374151" strokeWidth="1.2"/><path d="M17.5 6.5h.01" stroke="#374151" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </a>
            <a href="#" aria-label="youtube" className="text-gray-500 hover:text-red-500">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 8.2s-.2-1.4-.8-2c-.7-.8-1.6-.8-2-0.9C16.6 5 12 5 12 5s-4.6 0-6.9.3c-.4 0-1.3.1-2 .9-.6.6-.8 2-.8 2S2 9.9 2 11.6v0c0 1.8.2 3.4.2 3.4s.2 1.4.8 2c.7.8 1.7.7 2.1.8C7.3 18 12 18 12 18s4.6 0 6.9-.3c.4-.1 1.3-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.4v0c0-1.7-.2-3.4-.2-3.4z" stroke="#374151" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/about" className="text-sm text-gray-700 hover:text-orange-500">About Us</Link></li>
            <li><Link to="/products" className="text-sm text-gray-700 hover:text-orange-500">Products</Link></li>
            <li><Link to="/contact" className="text-sm text-gray-700 hover:text-orange-500">Contact Us</Link></li>
            <li><Link to="/login" className="text-sm text-gray-700 hover:text-orange-500">Account</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-3">Contact Us</h4>
          <p className="text-sm text-gray-700">123, Industrial Area<br/>Rajkot, Gujarat - 360001<br/>India</p>
          <p className="mt-2 text-sm">+91-98765-43210</p>
          <a className="text-sm text-orange-500 block mt-1" href="mailto:info@shreeomhardware.com">info@shreeomhardware.com</a>
        </div>
      </div>

      <div className="bg-gray-50 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-500">© 2026 Shree Om Hardware. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;
