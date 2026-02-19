import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Login successful", { email, password, remember });
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

        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <div>
            <label className="text-sm">Email Address</label>
            <input className="w-full border rounded px-3 py-2 mt-1" type="text" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label className="text-sm">Password</label>
            <input className="w-full border rounded px-3 py-2 mt-1" type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2"><input type="checkbox" checked={remember} onChange={() => setRemember(!remember)} className="accent-orange-500"/> Remember me</label>
            <Link to="/forgot-password" className="text-orange-500">Forgot Password?</Link>
          </div>

          <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded">Login</button>
        </form>

        <p className="text-sm text-center mt-4">Don’t have an account? <Link to="/register" className="text-orange-500">Register Now</Link></p>
      </div>
    </div>
  );
}

export default Login;
