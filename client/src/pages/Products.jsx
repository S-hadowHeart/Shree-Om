import ProductCard from "../components/ProductCard";
import { useState } from "react";

function Products() {
  const [price, setPrice] = useState(2500);

  const products = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    name: `Product ${i + 1} - Premium Door Handle`,
    price: 499 + i * 100,
    oldPrice: 799 + i * 120,
    rating: (4 + (i % 5) * 0.1).toFixed(1),
    image: `https://placehold.co/400x300?text=Prod+${i + 1}`,
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <aside className="lg:col-span-1 bg-white p-4 rounded-md shadow-sm">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-orange-500"><circle cx="12" cy="12" r="10" stroke="#F6873E" strokeWidth="1.5"/></svg>Filters</h3>

          <div className="mb-6">
            <h4 className="font-medium flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L15 8H9L12 2Z" fill="#F6873E"/></svg>Categories</h4>
            <ul className="mt-2 space-y-2 text-sm text-gray-700">
              <li className="flex items-center justify-between">
                <label className="flex items-center gap-2"><input type="checkbox" className="accent-orange-500"/> Door Handles</label>
                <span className="text-gray-400">(48)</span>
              </li>
              <li className="flex items-center justify-between">
                <label className="flex items-center gap-2"><input type="checkbox" className="accent-orange-500"/> Locks</label>
                <span className="text-gray-400">(36)</span>
              </li>
              <li className="flex items-center justify-between">
                <label className="flex items-center gap-2"><input type="checkbox" className="accent-orange-500"/> Hinges</label>
                <span className="text-gray-400">(28)</span>
              </li>
              <li className="flex items-center justify-between">
                <label className="flex items-center gap-2"><input type="checkbox" className="accent-orange-500"/> Tower Bolts</label>
                <span className="text-gray-400">(24)</span>
              </li>
              <li className="flex items-center justify-between">
                <label className="flex items-center gap-2"><input type="checkbox" className="accent-orange-500"/> Accessories</label>
                <span className="text-gray-400">(32)</span>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="font-medium">Price Range</h4>
            <div className="mt-2 text-sm text-gray-600">₹0 <span className="float-right">₹5000</span></div>
            <input type="range" min="0" max="5000" value={price} onChange={(e)=>setPrice(e.target.value)} className="w-full mt-3" />
            <div className="mt-2 text-sm text-gray-800 font-semibold">₹{price}</div>
          </div>

          <div className="mb-6">
            <h4 className="font-medium flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="3" fill="#F6873E"/></svg>Material</h4>
            <ul className="mt-2 space-y-2 text-sm text-gray-700">
              <li><label className="flex items-center gap-2"><input type="checkbox" className="accent-orange-500"/> Stainless Steel</label></li>
              <li><label className="flex items-center gap-2"><input type="checkbox" className="accent-orange-500"/> Brass</label></li>
              <li><label className="flex items-center gap-2"><input type="checkbox" className="accent-orange-500"/> Zinc Alloy</label></li>
              <li><label className="flex items-center gap-2"><input type="checkbox" className="accent-orange-500"/> Aluminum Alloy</label></li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="font-medium flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L20 8V16L12 22L4 16V8L12 2Z" fill="#F6873E"/></svg>Finish</h4>
            <ul className="mt-2 space-y-2 text-sm text-gray-700">
              <li><label className="flex items-center gap-2"><input type="checkbox" className="accent-orange-500"/> Chrome</label></li>
              <li><label className="flex items-center gap-2"><input type="checkbox" className="accent-orange-500"/> Matt Black</label></li>
              <li><label className="flex items-center gap-2"><input type="checkbox" className="accent-orange-500"/> Gold</label></li>
              <li><label className="flex items-center gap-2"><input type="checkbox" className="accent-orange-500"/> Nickel</label></li>
              <li><label className="flex items-center gap-2"><input type="checkbox" className="accent-orange-500"/> Antique</label></li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="font-medium flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.3L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.3Z" fill="#F6873E"/></svg>Minimum Rating</h4>
            <select className="mt-2 w-full border rounded px-3 py-2 text-sm">
              <option>All Ratings</option>
              <option>4.0 & up</option>
              <option>3.0 & up</option>
              <option>2.0 & up</option>
            </select>
          </div>

          <button className="w-full border border-gray-200 rounded py-2 text-sm">Clear All Filters</button>
        </aside>

        <main className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Products;
