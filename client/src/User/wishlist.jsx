import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("wishlist");
      if (stored) {
        try {
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setItems(JSON.parse(stored));
        } catch (e) {
          console.error("failed to parse wishlist from localStorage", e);
          setItems([]);
        }
      }
    }
  }, []);

  const save = (newList) => {
    setItems(newList);
    if (typeof window !== "undefined") {
      localStorage.setItem("wishlist", JSON.stringify(newList));
    }
  };

  const removeItem = (id) => {
    const upd = items.filter((p) => p.id !== id);
    save(upd);
  };

  const addToCart = (product) => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem("cart");
    const cart = stored ? JSON.parse(stored) : [];
    cart.push({ ...product, qty: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    // optional: remove from wishlist after adding
    removeItem(product.id);
  };

  return (
    <div className="px-6 py-8 max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">
        My Wishlist ({items.length})
      </h2>

      {items.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 mb-4">
            Your wishlist is empty.
          </p>
          <Link
            to="/products"
            className="bg-orange-500 text-white px-5 py-2 rounded-md"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((p) => {
            const slug =
              p.id || p.name
                ? encodeURIComponent(
                    (p.id || p.name)
                      .toString()
                      .toLowerCase()
                      .replace(/\s+/g, "-")
                  )
                : "";

            return (
              <div
                key={p.id || slug}
                className="bg-white rounded-lg shadow-sm p-4 flex flex-col"
              >
                <div className="relative">
                  <Link to={`/product/${slug}`} state={{ product: p }}>
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-44 object-cover rounded-md"
                      />
                    ) : (
                      <div className="w-full h-44 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">
                        No Image
                      </div>
                    )}
                  </Link>
                  {(p.oldPrice && p.price) && (
                    <div className="absolute left-3 top-3 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
                      {Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100)}% OFF
                    </div>
                  )}
                </div>

                <h4 className="mt-3 text-sm font-medium text-slate-900">
                  {p.name}
                </h4>

                <div className="mt-2 flex items-center justify-between">
                  <div>
                    <div className="text-orange-600 font-semibold">
                      ₹{p.price}
                    </div>
                    {p.oldPrice && (
                      <div className="text-sm text-gray-400 line-through">
                        ₹{p.oldPrice}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-yellow-400"
                    >
                      <path
                        d="M12 17.3L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.3Z"
                        fill="#FBBF24"
                      />
                    </svg>
                    <span>{p.rating ?? "4.5"}</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <button
                    onClick={() => addToCart(p)}
                    className="bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 flex items-center justify-center gap-2"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 6h15l-1.5 9h-12z"
                        stroke="#fff"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="10" cy="20" r="1" fill="#fff" />
                      <circle cx="18" cy="20" r="1" fill="#fff" />
                    </svg>
                    Add to Cart
                  </button>

                  <button
                    onClick={() => removeItem(p.id)}
                    className="text-red-500 p-2 hover:bg-gray-100 rounded"
                    aria-label="Remove from wishlist"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.366-.446.958-.549 1.445-.29l.094.06 1.768 1.05h3.683c.69 0 1.25.56 1.25 1.25v1.5a.75.75 0 01-1.5 0v-1h-9v1a.75.75 0 01-1.5 0v-1.5c0-.69.56-1.25 1.25-1.25h3.683l1.768-1.05z"
                        clipRule="evenodd"
                      />
                      <path d="M4.5 7.5A.5.5 0 015 7h10a.5.5 0 01.5.5v10a2 2 0 01-2 2H6.5a2 2 0 01-2-2v-10z" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
