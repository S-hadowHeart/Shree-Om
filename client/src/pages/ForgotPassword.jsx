import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email) return setError("Email is required");
    if (!/\S+@\S+\.\S+/.test(email)) return setError("Enter valid email address");

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      await res.json();
      navigate("/reset-sent", { state: { email } });
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="w-full max-w-md bg-white p-6 rounded shadow-sm">
        <h2 className="text-xl font-semibold">Reset Your Password</h2>
        <p className="text-sm text-gray-600 mt-1">Enter your email and we'll send you a reset link</p>

        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <div>
            <label className="text-sm">Email Address</label>
            <input
              className="w-full border rounded px-3 py-2 mt-1"
              type="text"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <p className="text-sm text-red-500">{error}</p>}
          </div>
          <button type="submit" disabled={loading} className="w-full bg-orange-500 text-white py-2 rounded disabled:opacity-60">
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        <p className="text-sm mt-4">
          <Link to="/login" className="text-orange-500">Remember password? Back to Login</Link>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
