import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.name) newErrors.name = "Full name is required";

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter valid email";
    }

    if (!form.phone) {
      newErrors.phone = "Phone number required";
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Enter valid 10 digit phone number";
    }

    if (!form.password) {
      newErrors.password = "Password required";
    } else if (form.password.length < 6) {
      newErrors.password = "Minimum 6 characters";
    }

    if (form.confirmPassword !== form.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!form.agree) {
      newErrors.agree = "You must accept Terms";
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
      console.log("Register Data:", form);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="w-full max-w-md bg-white p-6 rounded shadow-sm">
        <div className="text-center mb-4">
          <div className="w-12 h-12 bg-orange-500 text-white rounded-md mx-auto flex items-center justify-center font-bold">SO</div>
        </div>

        <h2 className="text-xl font-semibold text-center">Create Account</h2>
        <p className="text-sm text-gray-600 text-center">Join Shree Om Hardware today</p>

        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <div>
            <label className="text-sm">Full Name</label>
            <input className="w-full border rounded px-3 py-2 mt-1" type="text" name="name" value={form.name} onChange={handleChange} placeholder="Enter your Name" />
            {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
          </div>

          <div>
            <label className="text-sm">Email Address</label>
            <input className="w-full border rounded px-3 py-2 mt-1" type="text" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label className="text-sm">Phone Number</label>
            <input className="w-full border rounded px-3 py-2 mt-1" type="text" name="phone" value={form.phone} onChange={handleChange} placeholder="9876543210" />
            {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
          </div>

          <div>
            <label className="text-sm">Password</label>
            <input className="w-full border rounded px-3 py-2 mt-1" type="password" name="password" value={form.password} onChange={handleChange} placeholder="Create strong password" />
            {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
          </div>

          <div>
            <label className="text-sm">Confirm Password</label>
            <input className="w-full border rounded px-3 py-2 mt-1" type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} placeholder="Confirm password" />
            {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword}</p>}
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} className="accent-orange-500" />
            <span className="text-sm">I agree to Terms & Conditions</span>
          </div>
          {errors.agree && <p className="text-sm text-red-500">{errors.agree}</p>}

          <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded">Create Account</button>
        </form>

        <p className="text-sm text-center mt-4">Already have an account? <Link to="/login" className="text-orange-500">Login</Link></p>
      </div>
    </div>
  );
}

export default Register;
