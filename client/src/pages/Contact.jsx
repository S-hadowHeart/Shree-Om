function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-slate-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl text-white font-semibold">Contact Us</h1>
          <p className="text-slate-200 mt-1">We'd love to hear from you</p>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white p-6 rounded shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Send us a Message</h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm block mb-1">Full Name *</label>
                <input className="w-full border rounded px-3 py-2" type="text" placeholder="Full Name" />
              </div>

              <div>
                <label className="text-sm block mb-1">Phone *</label>
                <input className="w-full border rounded px-3 py-2" type="text" placeholder="Phone" />
              </div>

              <div className="md:col-span-2">
                <label className="text-sm block mb-1">Email *</label>
                <input className="w-full border rounded px-3 py-2" type="email" placeholder="Email" />
              </div>

              <div className="md:col-span-2">
                <label className="text-sm block mb-1">Subject *</label>
                <input className="w-full border rounded px-3 py-2" type="text" placeholder="Subject" />
              </div>

              <div className="md:col-span-2">
                <label className="text-sm block mb-1">Message *</label>
                <textarea className="w-full border rounded px-3 py-2 h-36" placeholder="Message"></textarea>
              </div>

              <div className="md:col-span-2">
                <button className="bg-orange-500 text-white px-4 py-2 rounded">Send Message</button>
              </div>
            </form>
          </div>

          <aside className="bg-white p-6 rounded shadow-sm">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-orange-100 text-orange-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14v7"/></svg>
              </div>
              <div>
                <h4 className="font-semibold">Address</h4>
                <p className="text-sm text-gray-600">123, Industrial Area, Rajkot, Gujarat - 360001, India</p>
              </div>
            </div>

            <div className="mt-4 flex items-start gap-3">
              <div className="p-2 rounded-full bg-orange-100 text-orange-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h2l.4 2M7 13h10l4-8H5.4M7 13l-1.2 6M17 13l1.2 6M6 21h12"/></svg>
              </div>
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-sm text-gray-600">+91-98765-43210</p>
              </div>
            </div>

            <div className="mt-4 flex items-start gap-3">
              <div className="p-2 rounded-full bg-orange-100 text-orange-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m8 4H8m4-8H8M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-sm text-orange-600">info@shreeomhardware.com</p>
              </div>
            </div>

            <div className="mt-4 flex items-start gap-3">
              <div className="p-2 rounded-full bg-orange-100 text-orange-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3"/></svg>
              </div>
              <div>
                <h4 className="font-semibold">Business Hours</h4>
                <p className="text-sm text-gray-600">Monday - Saturday<br/>9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-8 bg-white p-6 rounded shadow-sm">
          <h3 className="text-lg font-semibold">Frequently Asked Questions</h3>
          <div className="mt-4 space-y-2">
            <details className="p-3 border rounded"><summary className="cursor-pointer font-medium">What is the minimum order quantity?</summary><div className="mt-2 text-sm text-gray-600">Minimum order depends on product. Contact sales for MOQ.</div></details>
            <details className="p-3 border rounded"><summary className="cursor-pointer font-medium">Do you ship pan-India?</summary><div className="mt-2 text-sm text-gray-600">Yes, we ship across India. Shipping charges apply.</div></details>
            <details className="p-3 border rounded"><summary className="cursor-pointer font-medium">What is the warranty period?</summary><div className="mt-2 text-sm text-gray-600">Warranty varies by product. Standard 1 year warranty for hardware.</div></details>
            <details className="p-3 border rounded"><summary className="cursor-pointer font-medium">How do I become a dealer?</summary><div className="mt-2 text-sm text-gray-600">Please contact our sales team via email with your business details.</div></details>
            <details className="p-3 border rounded"><summary className="cursor-pointer font-medium">What payment methods do you accept?</summary><div className="mt-2 text-sm text-gray-600">We accept bank transfer, UPI and major cards.</div></details>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
