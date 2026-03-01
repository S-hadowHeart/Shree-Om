import { Link } from "react-router-dom";
import { useState } from "react";

function ProductCard(props) {
  const { product, name, price, oldPrice, rating, image } = props;
  const p = product || { name, price, oldPrice, rating, image };
  const [added, setAdded] = useState(false);

  const slug = p.id ?? p.name?.toLowerCase().replace(/\s+/g, "-");

  const addToCart = () => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem("cart");
    const cart = stored ? JSON.parse(stored) : [];
    cart.push({ ...p, qty: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col">
      <div className="relative">
        <Link to={`/product/${encodeURIComponent(slug)}`} state={{ product: p }} className="block">
          {p.image ? (
            <img src={p.image} alt={p.name} className="w-full h-44 object-cover rounded-md" />
          ) : (
            <div className="w-full h-44 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">No Image</div>
          )}
        </Link>
        <div className="absolute left-3 top-3 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">25% OFF</div>
      </div>

      <Link to={`/product/${encodeURIComponent(slug)}`} state={{ product: p }} className="no-underline">
        <h4 className="mt-3 text-sm font-medium text-slate-900">{p.name}</h4>
      </Link>

      <div className="mt-2 flex items-center justify-between">
        <div>
          <div className="text-orange-600 font-semibold">₹{p.price}</div>
          {p.oldPrice && <div className="text-sm text-gray-400 line-through">₹{p.oldPrice}</div>}
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-yellow-400"><path d="M12 17.3L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.3Z" fill="#FBBF24"/></svg>
          <span>{p.rating ?? "4.5"}</span>
        </div>
      </div>

      <button onClick={addToCart} className="mt-4 bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 flex items-center justify-center gap-2">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6h15l-1.5 9h-12z" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="10" cy="20" r="1" fill="#fff"/><circle cx="18" cy="20" r="1" fill="#fff"/></svg>
        {added ? "Added!" : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductCard;
