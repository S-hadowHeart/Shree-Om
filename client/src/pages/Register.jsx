import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const rules = {
  name: (v) => {
    if (!v.trim()) return "Full name is required";
    if (v.trim().length < 3) return "Name must be at least 3 characters";
    if (!/^[a-zA-Z\s]+$/.test(v)) return "Name can only contain letters and spaces";
    return "";
  },
  email: (v) => {
    if (!v) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return "Enter a valid email (e.g. you@gmail.com)";
    return "";
  },
  phone: (v) => {
    if (!v) return "Phone number is required";
    if (!/^[6-9][0-9]{9}$/.test(v)) return "Enter a valid 10-digit Indian mobile number (starts with 6–9)";
    return "";
  },
  password: (v) => {
    if (!v) return "Password is required";
    if (v.length < 8) return "Password must be at least 8 characters";
    if (!/[A-Z]/.test(v)) return "Include at least one uppercase letter (A–Z)";
    if (!/[0-9]/.test(v)) return "Include at least one number (0–9)";
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(v)) return "Include at least one special character (!@#$...)";
    return "";
  },
  confirmPassword: (v, password) => {
    if (!v) return "Please confirm your password";
    if (v !== password) return "Passwords do not match";
    return "";
  },
};

function fieldClass(touched, error) {
  if (!touched) return "w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-300";
  if (error) return "w-full border border-red-400 rounded px-3 py-2 mt-1 bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-300";
  return "w-full border border-green-400 rounded px-3 py-2 mt-1 bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-300";
}

function PasswordStrength({ password }) {
  if (!password) return null;
  const checks = [
    { label: "8+ characters", ok: password.length >= 8 },
    { label: "Uppercase (A–Z)", ok: /[A-Z]/.test(password) },
    { label: "Number (0–9)", ok: /[0-9]/.test(password) },
    { label: "Special character", ok: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password) },
  ];
  const passed = checks.filter((c) => c.ok).length;
  const colors = ["bg-red-400", "bg-orange-400", "bg-yellow-400", "bg-green-500"];
  return (
    <div className="mt-2">
      <div className="flex gap-1 mb-1">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className={`h-1 flex-1 rounded ${i < passed ? colors[passed - 1] : "bg-gray-200"} transition-all`} />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-0.5">
        {checks.map((c) => (
          <span key={c.label} className={`text-xs flex items-center gap-1 ${c.ok ? "text-green-600" : "text-gray-400"}`}>
            {c.ok ? "✓" : "○"} {c.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function Register() {
  const { register } = useAuth();

  const [fields, setFields] = useState({ name: "", email: "", phone: "", password: "", confirmPassword: "" });
  const [touched, setTouched] = useState({});
  const [agree, setAgree] = useState(false);
  const [agreeTouched, setAgreeTouched] = useState(false);
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const errors = {
    name: rules.name(fields.name),
    email: rules.email(fields.email),
    phone: rules.phone(fields.phone),
    password: rules.password(fields.password),
    confirmPassword: rules.confirmPassword(fields.confirmPassword, fields.password),
  };

  const isValid = Object.values(errors).every((e) => !e) && agree;

  const handleChange = (e) =>
    setFields({ ...fields, [e.target.name]: e.target.value });

  const handleBlur = (e) =>
    setTouched({ ...touched, [e.target.name]: true });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, password: true, confirmPassword: true });
    setAgreeTouched(true);
    if (!isValid) return;
    setApiError("");
    setLoading(true);
    try {
      const data = await register(fields.name, fields.email, fields.phone, fields.password);
      setSuccess(data.message || "Account created! Please check your email to verify your account.");
    } catch (err) {
      setApiError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
        <div className="w-full max-w-md bg-white p-8 rounded shadow-sm text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          </div>
          <h2 className="text-xl font-semibold text-slate-800">Check Your Email</h2>
          <p className="text-sm text-gray-600 mt-2">{success}</p>
          <p className="text-sm text-gray-500 mt-4">Click the verification link in your inbox to activate your account.</p>
          <Link to="/login" className="inline-block mt-6 bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">Go to Login</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="w-full max-w-md bg-white p-6 rounded shadow-sm">
        <div className="text-center mb-4">
          <div className="w-12 h-12 bg-orange-500 text-white rounded-md mx-auto flex items-center justify-center font-bold">SO</div>
        </div>
        <h2 className="text-xl font-semibold text-center">Create Account</h2>
        <p className="text-sm text-gray-600 text-center">Join Shree Om Hardware today</p>

        {apiError && <div className="mt-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded px-3 py-2">{apiError}</div>}

        <form onSubmit={handleSubmit} className="mt-4 space-y-3" noValidate>
          <div>
            <label className="text-sm font-medium">Full Name</label>
            <input className={fieldClass(touched.name, errors.name)} type="text" name="name" value={fields.name} onChange={handleChange} onBlur={handleBlur} placeholder="e.g. Rahul Sharma" />
            {touched.name && errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="text-sm font-medium">Email Address</label>
            <input className={fieldClass(touched.email, errors.email)} type="email" name="email" value={fields.email} onChange={handleChange} onBlur={handleBlur} placeholder="you@example.com" />
            {touched.email && errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="text-sm font-medium">Phone Number</label>
            <div className="flex mt-1 gap-2">
              <span className="flex items-center px-3 border rounded bg-gray-50 text-sm text-gray-600">🇮🇳 +91</span>
              <input
                className={`flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 ${touched.phone && errors.phone ? "border-red-400 bg-red-50 focus:ring-red-300" : touched.phone ? "border-green-400 bg-green-50 focus:ring-green-300" : "focus:ring-orange-300"}`}
                type="tel" name="phone" value={fields.phone} onChange={handleChange} onBlur={handleBlur} placeholder="9876543210" maxLength={10}
              />
            </div>
            {touched.phone && errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label className="text-sm font-medium">Password</label>
            <input className={fieldClass(touched.password, errors.password)} type="password" name="password" value={fields.password} onChange={handleChange} onBlur={handleBlur} placeholder="Create a strong password" />
            <PasswordStrength password={fields.password} />
            {touched.password && errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
          </div>

          <div>
            <label className="text-sm font-medium">Confirm Password</label>
            <input className={fieldClass(touched.confirmPassword, errors.confirmPassword)} type="password" name="confirmPassword" value={fields.confirmPassword} onChange={handleChange} onBlur={handleBlur} placeholder="Repeat your password" />
            {touched.confirmPassword && errors.confirmPassword && <p className="text-xs text-red-500 mt-1">{errors.confirmPassword}</p>}
          </div>

          <div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={agree} onChange={() => { setAgree(!agree); setAgreeTouched(true); }} className="accent-orange-500 w-4 h-4" />
              <span className="text-sm">I agree to the <span className="text-orange-500 underline cursor-pointer">Terms &amp; Conditions</span></span>
            </label>
            {agreeTouched && !agree && <p className="text-xs text-red-500 mt-1">You must accept the Terms &amp; Conditions</p>}
          </div>

          <button type="submit" disabled={loading} className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 disabled:opacity-60 transition-colors">
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <p className="text-sm text-center mt-4">Already have an account? <Link to="/login" className="text-orange-500">Login</Link></p>
      </div>
    </div>
  );
}

export default Register;
