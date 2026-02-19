import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const goProducts = () => navigate("/products");
  const goContact = () => navigate("/contact");

  return (
    <div className="bg-gray-50">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Premium Hardware Parts</h1>
            <p className="mt-2 text-gray-600">Manufacturing high-quality door handles, locks, hinges, and hardware accessories since 2010</p>
            <div className="mt-6 flex gap-3">
              <button onClick={goProducts} className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">Shop Now</button>
              <button onClick={goContact} className="border border-gray-200 px-4 py-2 rounded-md">Contact Us</button>
            </div>
          </div>

          <div className="hidden md:block">
            <img src="https://placehold.co/600x360?text=Hardware+Factory" alt="Hero" className="w-full rounded-md object-cover" />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Featured Products</h2>
          <button onClick={goProducts} className="text-sm text-orange-500">View All</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard name="Premium SS304 Door Handle" price="899" oldPrice="1200" image="https://placehold.co/400x300?text=Handle+1" />
          <ProductCard name="Heavy Duty Lock Set" price="1250" image="https://placehold.co/400x300?text=Lock" />
          <ProductCard name="Door Handle Matt Black" price="749" oldPrice="950" image="https://placehold.co/400x300?text=Matt+Black" />
          <ProductCard name="Heavy Duty Hinge Set" price="599" image="https://placehold.co/400x300?text=Hinge" />
        </div>
      </section>
    </div>
  );
}

export default Home;
