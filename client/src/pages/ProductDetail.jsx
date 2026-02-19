import { useParams, useLocation, Link } from "react-router-dom";
import { useState } from "react";
import ProductCard from "../components/ProductCard";

function ProductDetail() {
  const { id } = useParams();
  const location = useLocation();
  const product = location.state?.product || {
    id,
    name: id
      ? decodeURIComponent(id).replace(/-/g, " ")
      : "Premium Main Door Handle SMD-1007",
    price: 799,
    oldPrice: 899,
    sku: "SMD-1007",
    image: "https://placehold.co/528x602?text=Main+Product",
    images: [
      "https://placehold.co/528x602?text=Main+Product",
      "https://placehold.co/200x200?text=Alt+1",
      "https://placehold.co/200x200?text=Alt+2",
      "https://placehold.co/200x200?text=Alt+3",
    ],
    description:
      "Premium main door handle with multiple variants. Crafted for modern aesthetics and long-lasting durability.",
    material: "SS304 Stainless Steel",
    sizes: '8", 10", 12"',
    finishes: "CP Satin, Black, Gold, BA, Rosegold",
    packaging: "2 pieces per pack",
    installation: "Screw (Hardware Included)",
    warranty: "2 years",
  };

  const [selectedImage, setSelectedImage] = useState(
    product.images?.[0] || product.image,
  );
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState("description");

  function dec() {
    setQty((q) => Math.max(1, q - 1));
  }

  function inc() {
    setQty((q) => q + 1);
  }

  const related = Array.from({ length: 3 }).map((_, i) => ({
    id: `r-${i + 1}`,
    name: `Main Door Handle SMD-10${i + 1}`,
    price: 749 + i * 20,
    oldPrice: 899 + i * 20,
    rating: (4 + i * 0.1).toFixed(1),
    image: `https://placehold.co/276x276?text=R+${i + 1}`,
  }));

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-sm text-gray-500">
            <Link to="/" className="text-orange-600">
              Home
            </Link>{" "}
            /{" "}
            <Link to="/products" className="text-orange-600">
              Products
            </Link>{" "}
            / <span className="text-gray-600">{product.name}</span>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white p-6 rounded shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* IMAGE SECTION FIXED */}
                <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-4">
                  {/* Thumbnails */}
                  <div className="flex md:flex-col gap-3 order-2 md:order-1">
                    {product.images?.map((src, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImage(src)}
                        className={`rounded overflow-hidden border-2 transition ${
                          selectedImage === src
                            ? "border-orange-500"
                            : "border-gray-200"
                        }`}
                      >
                        <img
                          src={src}
                          alt={`thumb-${idx}`}
                          className="w-20 h-20 object-cover"
                        />
                      </button>
                    ))}
                  </div>

                  {/* Main Image */}
                  <div className="order-1 md:order-2">
                    <img
                      src={selectedImage}
                      alt={product.name}
                      className="w-full h-[500px] object-contain bg-gray-100 rounded-lg"
                    />
                  </div>
                </div>

                {/* PRODUCT INFO */}
                <div>
                  <h1 className="text-2xl font-semibold">{product.name}</h1>
                  <p className="text-sm text-gray-500 mt-1">
                    SKU: {product.sku}
                  </p>

                  <div className="mt-4 flex items-center gap-4">
                    <div className="flex items-center gap-1 text-yellow-400">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="#FBBF24"
                      >
                        <path d="M12 17.3L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.3Z" />
                      </svg>
                      <span className="text-sm text-gray-600">4.5</span>
                      <span className="text-sm text-gray-400">
                        (156 reviews)
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-4">
                    <div className="text-2xl font-bold text-orange-600">
                      ₹{product.price}
                    </div>
                    {product.oldPrice && (
                      <div className="text-sm text-gray-400 line-through">
                        ₹{product.oldPrice}
                      </div>
                    )}
                    <div className="text-sm text-white bg-orange-500 px-2 py-1 rounded">
                      {Math.round(
                        ((product.oldPrice - product.price) /
                          product.oldPrice) *
                          100,
                      ) || 11}
                      % OFF
                    </div>
                  </div>

                  <p className="mt-4 text-gray-700">{product.description}</p>

                  <div className="mt-4 text-green-600">
                    In Stock (480 units available)
                  </div>

                  <div className="mt-4 flex items-center gap-4">
                    <div className="flex items-center border rounded overflow-hidden">
                      <button onClick={dec} className="px-3 py-2">
                        -
                      </button>
                      <input
                        value={qty}
                        onChange={(e) => setQty(Number(e.target.value) || 1)}
                        className="w-12 text-center"
                      />
                      <button onClick={inc} className="px-3 py-2">
                        +
                      </button>
                    </div>

                    <button className="ml-4 bg-orange-500 text-white px-6 py-3 rounded flex items-center gap-3">
                      Add to Cart
                    </button>

                    <button className="ml-2 border rounded p-3">❤</button>
                  </div>
                </div>
              </div>

              {/* TABS */}
              <div className="mt-8">
                <div className="bg-gray-100 rounded">
                  <div className="flex border-b bg-white">
                    <button
                      onClick={() => setTab("description")}
                      className={`px-4 py-3 ${
                        tab === "description"
                          ? "border-b-2 border-orange-500"
                          : ""
                      }`}
                    >
                      Description
                    </button>
                    <button
                      onClick={() => setTab("specs")}
                      className={`px-4 py-3 ${
                        tab === "specs" ? "border-b-2 border-orange-500" : ""
                      }`}
                    >
                      Specifications
                    </button>
                    <button
                      onClick={() => setTab("reviews")}
                      className={`px-4 py-3 ${
                        tab === "reviews" ? "border-b-2 border-orange-500" : ""
                      }`}
                    >
                      Reviews (0)
                    </button>
                  </div>

                  <div className="p-6 bg-white">
                    {tab === "description" && (
                      <div className="text-gray-700">{product.description}</div>
                    )}

                    {tab === "specs" && (
                      <table className="w-full text-sm text-gray-700">
                        <tbody>
                          <tr className="border-t">
                            <td className="py-3 font-medium w-1/3">Model</td>
                            <td className="py-3">{product.sku}</td>
                          </tr>
                          <tr className="border-t">
                            <td className="py-3 font-medium">Material</td>
                            <td className="py-3">{product.material}</td>
                          </tr>
                          <tr className="border-t">
                            <td className="py-3 font-medium">
                              Available Sizes
                            </td>
                            <td className="py-3">{product.sizes}</td>
                          </tr>
                          <tr className="border-t">
                            <td className="py-3 font-medium">
                              Available Finishes
                            </td>
                            <td className="py-3">{product.finishes}</td>
                          </tr>
                          <tr className="border-t">
                            <td className="py-3 font-medium">Packaging</td>
                            <td className="py-3">{product.packaging}</td>
                          </tr>
                          <tr className="border-t">
                            <td className="py-3 font-medium">Installation</td>
                            <td className="py-3">{product.installation}</td>
                          </tr>
                          <tr className="border-t">
                            <td className="py-3 font-medium">Warranty</td>
                            <td className="py-3">{product.warranty}</td>
                          </tr>
                        </tbody>
                      </table>
                    )}

                    {tab === "reviews" && (
                      <div className="text-gray-700">No reviews yet.</div>
                    )}
                  </div>
                </div>
              </div>

              {/* RELATED PRODUCTS */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold">
                  Related Products
                  <Link
                    to="/products"
                    className="text-sm text-orange-500 float-right"
                  >
                    View All
                  </Link>
                </h3>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {related.map((r) => (
                    <div key={r.id} className="bg-white p-3 rounded shadow-sm">
                      <ProductCard product={r} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
