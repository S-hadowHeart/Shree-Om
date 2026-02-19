import { Link, useLocation } from "react-router-dom";

function ResetEmailSent() {
  const location = useLocation();
  const email = location.state?.email || "your email";

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="w-full max-w-md bg-white p-6 rounded shadow-sm text-center">
        <h2 className="text-xl font-semibold">Reset Email Sent</h2>
        <p className="text-sm text-gray-600 mt-1">Check your email for the reset link</p>

        <div className="mt-4">
          <p className="text-sm text-gray-700">We've sent a password reset link to</p>
          <strong className="block mt-2">{email}</strong>
        </div>

        <Link to="/login" className="inline-block mt-6 bg-orange-500 text-white px-4 py-2 rounded">Back to Login</Link>
      </div>
    </div>
  );
}

export default ResetEmailSent;
