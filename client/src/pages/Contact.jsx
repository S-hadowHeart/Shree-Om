import { useState } from "react";

const rules = {
  name: (v) => {
    if (!v.trim()) return "Full name is required";
    if (v.trim().length < 3) return "Name must be at least 3 characters";
    if (!/^[a-zA-Z\s]+$/.test(v)) return "Name can only contain letters and spaces";
    return "";
  },
  phone: (v) => {
    if (!v) return "Phone number is required";
    if (!/^[6-9][0-9]{9}$/.test(v)) return "Enter a valid 10-digit Indian mobile number (starts with 6–9)";
    return "";
  },
  email: (v) => {
    if (!v) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return "Enter a valid email address";
    return "";
  },
  subject: (v) => {
    if (!v.trim()) return "Subject is required";
    if (v.trim().length < 5) return "Subject must be at least 5 characters";
    return "";
  },
  message: (v) => {
    if (!v.trim()) return "Message is required";
    if (v.trim().length < 20) return "Message must be at least 20 characters";
    if (v.trim().length > 1000) return "Message must be under 1000 characters";
    return "";
  },
};

function fieldClass(touched, error) {
  if (!touched) return "w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300";
  if (error) return "w-full border border-red-400 rounded px-3 py-2 bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-300";
  return "w-full border border-green-400 rounded px-3 py-2 bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-300";
}

function Contact() {
  const [fields, setFields] = useState({ name: "", phone: "", email: "", subject: "", message: "" });
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [apiError, setApiError] = useState("");

  const errors = {
    name: rules.name(fields.name),
    phone: rules.phone(fields.phone),
    email: rules.email(fields.email),
    subject: rules.subject(fields.subject),
    message: rules.message(fields.message),
  };

  const isValid = Object.values(errors).every((e) => !e);

  const handleChange = (e) =>
    setFields({ ...fields, [e.target.name]: e.target.value });

  const handleBlur = (e) =>
    setTouched({ ...touched, [e.target.name]: true });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, phone: true, email: true, subject: true, message: true });
    if (!isValid) return;
    setApiError("");
    setSuccess("");
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess(data.message);
        setFields({ name: "", phone: "", email: "", subject: "", message: "" });
        setTouched({});
      } else {
        setApiError(data.message);
      }
    } catch {
      setApiError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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

            {success && (
              <div className="mb-4 bg-green-50 border border-green-200 text-green-700 text-sm rounded px-4 py-3 flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                {success}
              </div>
            )}
            {apiError && <div className="mb-4 bg-red-50 border border-red-200 text-red-600 text-sm rounded px-4 py-3">{apiError}</div>}

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4" noValidate>
              <div>
                <label className="text-sm font-medium block mb-1">Full Name *</label>
                <input className={fieldClass(touched.name, errors.name)} type="text" name="name" value={fields.name} onChange={handleChange} onBlur={handleBlur} placeholder="e.g. Rahul Sharma" />
                {touched.name && errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="text-sm font-medium block mb-1">Phone *</label>
                <input className={fieldClass(touched.phone, errors.phone)} type="tel" name="phone" value={fields.phone} onChange={handleChange} onBlur={handleBlur} placeholder="9876543210" maxLength={10} />
                {touched.phone && errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
              </div>

              <div className="md:col-span-2">
                <label className="text-sm font-medium block mb-1">Email *</label>
                <input className={fieldClass(touched.email, errors.email)} type="email" name="email" value={fields.email} onChange={handleChange} onBlur={handleBlur} placeholder="you@example.com" />
                {touched.email && errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>

              <div className="md:col-span-2">
                <label className="text-sm font-medium block mb-1">Subject *</label>
                <input className={fieldClass(touched.subject, errors.subject)} type="text" name="subject" value={fields.subject} onChange={handleChange} onBlur={handleBlur} placeholder="What is this regarding?" />
                {touched.subject && errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject}</p>}
              </div>

              <div className="md:col-span-2">
                <label className="text-sm font-medium block mb-1">
                  Message *
                  <span className="text-gray-400 font-normal ml-2">({fields.message.length}/1000)</span>
                </label>
                <textarea
                  className={`${fieldClass(touched.message, errors.message)} h-36 resize-none`}
                  name="message" value={fields.message} onChange={handleChange} onBlur={handleBlur}
                  placeholder="Write your message here (min. 20 characters)..." maxLength={1000}
                />
                {touched.message && errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
              </div>

              <div className="md:col-span-2">
                <button type="submit" disabled={loading} className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 disabled:opacity-60 transition-colors">
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>

          <aside className="bg-white p-6 rounded shadow-sm">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-orange-100 text-orange-600 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div><h4 className="font-semibold text-sm">Address</h4><p className="text-sm text-gray-600">123, Industrial Area, Rajkot, Gujarat - 360001, India</p></div>
            </div>
            <div className="mt-4 flex items-start gap-3">
              <div className="p-2 rounded-full bg-orange-100 text-orange-600 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div><h4 className="font-semibold text-sm">Phone</h4><p className="text-sm text-gray-600">+91-98765-43210</p></div>
            </div>
            <div className="mt-4 flex items-start gap-3">
              <div className="p-2 rounded-full bg-orange-100 text-orange-600 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div><h4 className="font-semibold text-sm">Email</h4><p className="text-sm text-orange-600">info@shreeomhardware.com</p></div>
            </div>
            <div className="mt-4 flex items-start gap-3">
              <div className="p-2 rounded-full bg-orange-100 text-orange-600 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div><h4 className="font-semibold text-sm">Business Hours</h4><p className="text-sm text-gray-600">Monday – Saturday<br />9:00 AM – 6:00 PM</p></div>
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
