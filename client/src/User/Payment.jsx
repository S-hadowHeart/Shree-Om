import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const totalFromState = location.state?.total || 0;
  const [cart, setCart] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("UPI");
  const [upiId, setUpiId] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("cart");
      if (stored) {
        try {
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setCart(JSON.parse(stored));
        // eslint-disable-next-line no-unused-vars
        } catch (e) {
          setCart([]);
        }
      }
    }
  }, []);

  const subtotal = cart.reduce((sum, p) => sum + (p.price || 0) * (p.qty || 1), 0);
  const gst = Math.round(subtotal * 0.18);
  const total = totalFromState || subtotal + gst;

  const placeOrder = () => {
    // generate order id
    const id = `ORD-${new Date().getFullYear()}-${Math.random().toString(36).slice(2, 11).toUpperCase()}`;
    const date = new Date().toISOString().slice(0, 10);
    const order = {
      id,
      date,
      status: "Pending",
      total,
      address: "",
      payment: paymentMethod === "UPI" ? upiId : paymentMethod,
      items: cart,
    };
    // save to localStorage orders
    const existing = JSON.parse(localStorage.getItem("orders") || "[]");
    existing.unshift(order);
    localStorage.setItem("orders", JSON.stringify(existing));
    // clear cart
    localStorage.removeItem("cart");
    navigate("/payment-success", { state: { orderId: id } });
  };

  return (
    <div className="px-6 py-8 max-w-7xl mx-auto">
      <div className="mb-6">
        <div className="flex items-center gap-2 text-gray-500">
          <span className="font-semibold">1</span>
          Shipping
        </div>
        <div className="h-px bg-gray-200 my-2"></div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">2</span>
          Payment
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h3 className="font-semibold mb-4">Payment Method</h3>
          <div className="space-y-4">
            <label className="block border rounded p-4">
              <input
                type="radio"
                name="pm"
                value="UPI"
                checked={paymentMethod === "UPI"}
                onChange={() => setPaymentMethod("UPI")}
              />
              <span className="ml-2">UPI</span>
              <div className="text-xs text-gray-500">Pay using UPI ID</div>
            </label>

            <label className="block border rounded p-4">
              <input
                type="radio"
                name="pm"
                value="Card"
                checked={paymentMethod === "Card"}
                onChange={() => setPaymentMethod("Card")}
              />
              <span className="ml-2">Credit/Debit Card</span>
              <div className="text-xs text-gray-500">Visa, Mastercard, RuPay</div>
            </label>

            <label className="block border rounded p-4">
              <input
                type="radio"
                name="pm"
                value="COD"
                checked={paymentMethod === "COD"}
                onChange={() => setPaymentMethod("COD")}
              />
              <span className="ml-2">Cash on Delivery</span>
              <div className="text-xs text-gray-500">Pay when you receive</div>
            </label>
          </div>

          {paymentMethod === "UPI" && (
            <div className="mt-4">
              <label className="block text-sm text-gray-700">UPI ID</label>
              <input
                type="text"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                className="mt-1 w-full border rounded px-3 py-2"
                placeholder="yourname@paytm"
              />
            </div>
          )}

          <div className="flex items-center gap-4 mt-6">
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 border rounded"
            >
              Back
            </button>
            <button
              onClick={placeOrder}
              className="px-4 py-2 bg-orange-500 text-white rounded"
            >
              Place Order - ₹{total}
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-lg border p-6">
            <h3 className="font-semibold mb-4">Order Summary</h3>
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between">
              <span>GST (18%)</span>
              <span>₹{gst}</span>
            </div>
            <div className="flex justify-between font-bold mt-2">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
