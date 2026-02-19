function About() {
  return (
    <div className="bg-gray-50">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-2xl font-bold">About Shree Om Hardware</h1>
        <p className="mt-2 text-gray-600">Manufacturing Excellence Since 2010</p>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-xl font-semibold">Our Story</h2>
            <p className="mt-3 text-gray-700">Shree Om Hardware was founded in 2010 with a vision to provide high-quality hardware products to homes and businesses across India. What started as a small manufacturing unit in Rajkot, Gujarat, has now grown into one of the leading hardware manufacturers.</p>
            <p className="mt-3 text-gray-700">We specialize in manufacturing door handles, locks, hinges, tower bolts, and various hardware accessories using premium materials like stainless steel, brass, and aluminum alloy.</p>
          </div>

          <div>
            <img src="https://placehold.co/600x300?text=Factory+Image" alt="Factory" className="w-full rounded-md object-cover shadow-sm" />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded shadow-sm flex gap-4 items-start">
            <div className="text-orange-500 mt-1">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#FFF3E6" stroke="#F6873E"/><path d="M12 7a5 5 0 100 10 5 5 0 000-10z" fill="#F6873E"/></svg>
            </div>
            <div>
              <h3 className="font-semibold">Our Mission</h3>
              <p className="mt-2 text-gray-600">To manufacture and deliver world-class hardware products combining superior quality, innovative design, and affordability.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded shadow-sm flex gap-4 items-start">
            <div className="text-orange-500 mt-1">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="4" fill="#FFF3E6" stroke="#F6873E"/><path d="M8 12h8" stroke="#F6873E" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </div>
            <div>
              <h3 className="font-semibold">Our Vision</h3>
              <p className="mt-2 text-gray-600">To become India's most trusted hardware brand by continuously innovating and maintaining the highest standards of quality.</p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-lg font-semibold">Manufacturing Excellence</h2>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded shadow-sm text-center">
              <div className="flex items-center justify-center mb-3 text-orange-500"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h6l3-9 3 9h6" stroke="#F6873E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
              <div>Design</div>
            </div>
            <div className="bg-white p-4 rounded shadow-sm text-center">
              <div className="flex items-center justify-center mb-3 text-orange-500"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 13h18v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6z" stroke="#F6873E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 13V8a4 4 0 018 0v5" stroke="#F6873E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
              <div>Production</div>
            </div>
            <div className="bg-white p-4 rounded shadow-sm text-center">
              <div className="flex items-center justify-center mb-3 text-orange-500"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l2 5h5l-4 3 1 5-4-3-4 3 1-5-4-3h5l2-5z" stroke="#F6873E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
              <div>Quality Check</div>
            </div>
            <div className="bg-white p-4 rounded shadow-sm text-center">
              <div className="flex items-center justify-center mb-3 text-orange-500"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 7h18v10H3z" stroke="#F6873E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 3v4" stroke="#F6873E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
              <div>Delivery</div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-lg font-semibold">Certifications & Quality</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow-sm text-center">
              <div className="flex items-center justify-center mb-3 text-orange-500"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="4" fill="#FFF3E6" stroke="#F6873E"/><path d="M8 12l2 2 4-4" stroke="#F6873E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
              <h4 className="font-medium">ISO 9001:2015</h4>
              <p className="text-gray-600">Quality Management</p>
            </div>
            <div className="bg-white p-4 rounded shadow-sm text-center">
              <div className="flex items-center justify-center mb-3 text-orange-500"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#FFF3E6" stroke="#F6873E"/><path d="M12 8v6l3 2" stroke="#F6873E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
              <h4 className="font-medium">Made in India</h4>
              <p className="text-gray-600">100% Indian Manufacturing</p>
            </div>
            <div className="bg-white p-4 rounded shadow-sm text-center">
              <div className="flex items-center justify-center mb-3 text-orange-500"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l2 5h5l-4 3 1 5-4-3-4 3 1-5-4-3h5l2-5z" stroke="#F6873E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
              <h4 className="font-medium">BIS Certified</h4>
              <p className="text-gray-600">Bureau of Indian Standards</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
