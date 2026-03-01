import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("cart");
      if (stored) {
        try {
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setCart(JSON.parse(stored));
        } catch (e) {
          console.error("failed to parse cart", e);
          setCart([]);
        }
      }
    }
  }, []);

  const saveCart = (items) => {
    setCart(items);
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(items));
    }
  };

  const changeQty = (idx, delta) => {
    const items = [...cart];
    items[idx].qty = Math.max(1, (items[idx].qty || 1) + delta);
    saveCart(items);
  };

  const removeItem = (idx) => {
    const items = cart.filter((_, i) => i !== idx);
    saveCart(items);
  };

  const subtotal = cart.reduce((sum, p) => sum + (p.price || 0) * (p.qty || 1), 0);
  const gst = Math.round(subtotal * 0.18);
  const total = subtotal + gst - discount;

  const applyCoupon = () => {
    // simple coupon handling
    const code = coupon.trim().toUpperCase();
    let disc = 0;
    if (code === "WELCOME10") disc = Math.round(subtotal * 0.1);
    if (code === "SAVE20") disc = Math.round(subtotal * 0.2);
    if (code === "FESTIVE25") disc = Math.round(subtotal * 0.25);
    setDiscount(disc);
  };

  const proceed = () => {
    navigate("/payment", { state: { total } });
  };

  if (cart.length === 0) {
    return (
      <div className="px-6 py-8 max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Shopping Cart</h2>
        <div className="text-center text-gray-500 py-20">
          Your cart is empty.
          <div>
            <Link
              to="/products"
              className="mt-4 inline-block bg-orange-500 text-white px-5 py-2 rounded-md"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 py-8 max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Shopping Cart</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {cart.map((p, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <img
                src={p.image}
                alt={p.name}
                className="w-24 h-24 object-cover rounded"
              />
              <div className="flex-1">
                <p className="font-medium">{p.name}</p>
                {p.sku && (
                  <p className="text-xs text-gray-500">SKU: {p.sku}</p>
                )}
                <p className="text-sm text-gray-600">
                  ₹{p.price} × {p.qty}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => changeQty(idx, -1)}
                    className="px-2 border rounded"
                  >
                    -
                  </button>
                  <span className="px-2">{p.qty}</span>
                  <button
                    onClick={() => changeQty(idx, 1)}
                    className="px-2 border rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeItem(idx)}
                    className="text-red-500 text-sm ml-4"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className="font-semibold">₹{p.price * p.qty}</div>
            </div>
          ))}
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
            {discount > 0 && (
              <div className="flex justify-between text-green-600">
                <span>Discount</span>
                <span>-₹{discount}</span>
              </div>
            )}
            <div className="flex justify-between font-bold mt-2">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Enter coupon code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
              <button
                onClick={applyCoupon}
                className="mt-2 text-sm text-orange-500"
              >
                Apply
              </button>
              <div className="text-xs text-gray-500 mt-1">
                Try: WELCOME10, SAVE20, FESTIVE25
              </div>
            </div>
            <button
              onClick={proceed}
              className="mt-4 w-full bg-orange-500 text-white py-2 rounded"
            >
              Proceed to Checkout
            </button>
            <Link
              to="/products"
              className="block text-center mt-2 border rounded py-2"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
