import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const rules = {
  email: (v) => {
    if (!v) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return "Enter a valid email (e.g. you@gmail.com)";
    return "";
  },
  password: (v) => {
    if (!v) return "Password is required";
    if (v.length < 6) return "Password must be at least 6 characters";
    return "";
  },
};

function fieldClass(touched, error) {
  if (!touched) return "w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-300";
  if (error) return "w-full border border-red-400 rounded px-3 py-2 mt-1 bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-300";
  return "w-full border border-green-400 rounded px-3 py-2 mt-1 bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-300";
}

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [fields, setFields] = useState({ email: "", password: "" });
  const [touched, setTouched] = useState({});
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);
  const [remember, setRemember] = useState(false);
  const [notVerified, setNotVerified] = useState(false);
  const [resendStatus, setResendStatus] = useState("");
  const [resendLoading, setResendLoading] = useState(false);

  const errors = {
    email: rules.email(fields.email),
    password: rules.password(fields.password),
  };

  const isValid = !errors.email && !errors.password;

  const handleChange = (e) =>
    setFields({ ...fields, [e.target.name]: e.target.value });

  const handleBlur = (e) =>
    setTouched({ ...touched, [e.target.name]: true });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ email: true, password: true });
    if (!isValid) return;
    setApiError("");
    setNotVerified(false);
    setResendStatus("");
    setLoading(true);
    try {
      await login(fields.email, fields.password);
      navigate("/");
    } catch (err) {
      if (err.message.toLowerCase().includes("verify your email")) setNotVerified(true);
      setApiError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setResendLoading(true);
    setResendStatus("");
    try {
      const res = await fetch("http://localhost:5000/api/auth/resend-verification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: fields.email }),
      });
      const data = await res.json();
      setResendStatus(data.message);
    } catch {
      setResendStatus("Failed to resend. Please try again.");
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="w-full max-w-md bg-white p-6 rounded shadow-sm">
        <div className="text-center mb-4">
          <div className="w-12 h-12 bg-orange-500 text-white rounded-md mx-auto flex items-center justify-center font-bold">SO</div>
        </div>
        <h2 className="text-xl font-semibold text-center">Welcome Back</h2>
        <p className="text-sm text-gray-600 text-center">Login to your Shree Om Hardware account</p>

        {apiError && (
          <div className="mt-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded px-3 py-2">
            {apiError}
            {notVerified && (
              <div className="mt-2 pt-2 border-t border-red-200">
                <button onClick={handleResend} disabled={resendLoading} className="text-orange-600 underline font-medium disabled:opacity-60">
                  {resendLoading ? "Sending..." : "Resend verification email"}
                </button>
                {resendStatus && <p className="mt-1 text-green-600 font-medium">{resendStatus}</p>}
              </div>
            )}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-4 space-y-3" noValidate>
          <div>
            <label className="text-sm font-medium">Email Address</label>
            <input
              className={fieldClass(touched.email, errors.email)}
              type="email" name="email"
              placeholder="you@example.com"
              value={fields.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              className={fieldClass(touched.password, errors.password)}
              type="password" name="password"
              placeholder="Enter your password"
              value={fields.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.password && errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={remember} onChange={() => setRemember(!remember)} className="accent-orange-500" />
              Remember me
            </label>
            <Link to="/forgot-password" className="text-orange-500">Forgot Password?</Link>
          </div>

          <button type="submit" disabled={loading} className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 disabled:opacity-60 transition-colors">
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-orange-500">Register Now</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
