import { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateEmail = () => {
    if (!email) {
      return "Email is required";
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return "Enter valid email address";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = validateEmail();

    if (validationError) {
      setError(validationError);
      setSuccess("");
    } else {
      setError("");
      setSuccess("Reset link sent to your email!");
      console.log("Reset link for:", email);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="w-full max-w-md bg-white p-6 rounded shadow-sm">
        <h2 className="text-xl font-semibold">Reset Your Password</h2>
        <p className="text-sm text-gray-600 mt-1">Enter your email address and we'll send you a reset link</p>

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
            {success && <p className="text-sm text-green-600">{success}</p>}
          </div>

          <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded">Send Reset Link</button>
        </form>

        <p className="text-sm mt-4">
          <Link to="/login" className="text-orange-500">Remember password? Back to Login</Link>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
