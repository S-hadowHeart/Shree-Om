import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Download, ArrowLeft } from "lucide-react";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  // load orders from localStorage or initialize sample data
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("orders");
      if (stored) {
        try {
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setOrders(JSON.parse(stored));
        } catch (e) {
          console.error("failed to parse orders from localStorage", e);
          setOrders([]);
        }
      } else {
        // sample orders
        const sample = [
          {
            id: "ORD-2025-G9E3RG7Z5",
            date: "2026-02-16",
            status: "Pending",
            total: 1120,
            address: "yashmakwana2275, +91-9876543210, 123 Street, City, State, 360001",
            payment: "UPI",
            items: [
              {
                name: "Premium Antique Door Handle",
                qty: 1,
                price: 599,
                image: "https://placehold.co/80x80?text=Handle",
              },
            ],
          },
          {
            id: "ORD-2025-1SKKTRQVA",
            date: "2026-02-16",
            status: "Pending",
            total: 1475,
            address: "yashmakwana2275, +91-9876543210, 123 Street, City, State, 360001",
            payment: "UPI",
            items: [
              {
                name: "Stainless Steel Concealed Hinge (Pack of 4)",
                qty: 1,
                price: 1250,
                image: "https://placehold.co/80x80?text=Hinge",
              },
            ],
          },
        ];
        setOrders(sample);
        localStorage.setItem("orders", JSON.stringify(sample));
      }
    }
  }, []);

  return (
    <div className="px-6 py-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6 gap-2 text-gray-700">
        <Link
          to="/dashboard"
          className="hover:text-orange-500 flex items-center gap-1"
        >
          <ArrowLeft className="h-5 w-5" />
          Back
        </Link>
        <div className="ml-2">
          <h2 className="text-2xl font-semibold">My Orders</h2>
          <div className="text-sm text-gray-500">
            Showing last {orders.length} orders
          </div>
        </div>
      </div>

      {orders.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          You have not placed any orders yet.
        </div>
      ) : (
        <div className="space-y-8">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-lg border p-6 shadow-sm"
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-sm text-gray-500">
                    Order {order.id}
                  </div>
                  <div className="text-xs text-gray-400">
                    Placed on {order.date}
                  </div>
                </div>
                <div className="text-sm font-semibold uppercase text-gray-700">
                  {order.status}
                </div>
              </div>

              <div className="mt-4 space-y-4">
                {order.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 border-b pb-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-gray-500">
                        Qty: {item.qty} × ₹{item.price}
                      </p>
                    </div>
                    <div className="text-sm font-semibold">
                      ₹{item.qty * item.price}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <div className="text-xs text-gray-500 uppercase">
                  Total Amount
                </div>
                <div className="text-xl font-bold text-orange-500">
                  ₹{order.total}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-500">
                <div>
                  <div className="font-semibold">Shipping Address:</div>
                  <div>{order.address}</div>
                </div>
                <div>
                  <div className="font-semibold">Payment Method:</div>
                  <div>{order.payment}</div>
                </div>
              </div>

              <div className="mt-4 text-right">
                <button className="flex items-center gap-2 text-sm bg-gray-100 px-3 py-2 rounded">
                  <Download className="w-4 h-4" />
                  Download Invoice
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;
