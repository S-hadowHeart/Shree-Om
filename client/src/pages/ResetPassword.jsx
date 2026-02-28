import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

function ResetPassword() {
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");
    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!password || password.length < 6) return setError("Password must be at least 6 characters.");
        if (password !== confirmPassword) return setError("Passwords do not match.");

        setLoading(true);
        try {
            const res = await fetch("http://localhost:5000/api/auth/reset-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token, password }),
            });
            const data = await res.json();
            if (res.ok) {
                navigate("/login", { state: { message: "Password reset successfully! Please login." } });
            } else {
                setError(data.message);
            }
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (!token) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
                <div className="w-full max-w-md bg-white p-8 rounded shadow-sm text-center">
                    <h2 className="text-xl font-semibold text-red-500">Invalid Reset Link</h2>
                    <p className="text-sm text-gray-600 mt-2">This reset link is missing a token. Please request a new one.</p>
                    <Link to="/forgot-password" className="inline-block mt-6 bg-orange-500 text-white px-6 py-2 rounded">Request New Link</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
            <div className="w-full max-w-md bg-white p-6 rounded shadow-sm">
                <h2 className="text-xl font-semibold">Set New Password</h2>
                <p className="text-sm text-gray-600 mt-1">Enter your new password below</p>

                {error && <div className="mt-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded px-3 py-2">{error}</div>}

                <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                    <div>
                        <label className="text-sm">New Password</label>
                        <input className="w-full border rounded px-3 py-2 mt-1" type="password" placeholder="Minimum 6 characters" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <label className="text-sm">Confirm New Password</label>
                        <input className="w-full border rounded px-3 py-2 mt-1" type="password" placeholder="Repeat new password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    <button type="submit" disabled={loading} className="w-full bg-orange-500 text-white py-2 rounded disabled:opacity-60">
                        {loading ? "Resetting..." : "Reset Password"}
                    </button>
                </form>

                <p className="text-sm mt-4"><Link to="/login" className="text-orange-500">Back to Login</Link></p>
            </div>
        </div>
    );
}

export default ResetPassword;
