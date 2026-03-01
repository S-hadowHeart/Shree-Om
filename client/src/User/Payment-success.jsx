import React from "react";
import { Link, useLocation } from "react-router-dom";

const PaymentSuccess = () => {
  const location = useLocation();
  const orderId = location.state?.orderId || "ORD-XXXX-XXXXXXX";

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-sm text-center">
        <div className="text-green-500 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 mx-auto"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold mb-2">Order Placed Successfully!</h2>
        <p className="text-gray-600 mb-6">Thank you for your order!</p>

        <div className="bg-gray-100 p-4 rounded mb-6">
          <div className="text-sm text-gray-500">ORDER NUMBER</div>
          <div className="font-bold text-orange-500 mt-1">{orderId}</div>
          <div className="text-xs text-gray-500 mt-1">
            Estimated Delivery: February 20-22, 2025 (5-7 business days)
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 justify-center">
          <Link
            to="/my-orders"
            className="bg-orange-500 text-white px-4 py-2 rounded"
          >
            View Order Details
          </Link>
          <button className="border px-4 py-2 rounded">
            Download Invoice
          </button>
          <Link to="/products" className="border px-4 py-2 rounded">
            Continue Shopping
          </Link>
        </div>

        <div className="text-xs text-gray-400 mt-4">
          Order confirmation sent to your email
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
