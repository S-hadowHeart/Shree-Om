import { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";

function VerifyEmail() {
    const { token } = useParams();
    const [status, setStatus] = useState("loading");
    const [message, setMessage] = useState("");
    const called = useRef(false);

    useEffect(() => {
        if (called.current) return;
        called.current = true;

        async function verify() {
            try {
                const res = await fetch(`http://localhost:5000/api/auth/verify-email/${token}`);
                const data = await res.json();
                if (res.ok) {
                    setStatus("success");
                    setMessage(data.message);
                } else {
                    setStatus("error");
                    setMessage(data.message);
                }
            } catch {
                setStatus("error");
                setMessage("Something went wrong. Please try again.");
            }
        }
        verify();
    }, [token]);

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
            <div className="w-full max-w-md bg-white p-8 rounded shadow-sm text-center">
                {status === "loading" && (
                    <>
                        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-gray-600">Verifying your email...</p>
                    </>
                )}
                {status === "success" && (
                    <>
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <h2 className="text-xl font-semibold text-slate-800">Email Verified!</h2>
                        <p className="text-sm text-gray-600 mt-2">{message}</p>
                        <Link to="/login" className="inline-block mt-6 bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">Login Now</Link>
                    </>
                )}
                {status === "error" && (
                    <>
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </div>
                        <h2 className="text-xl font-semibold text-slate-800">Verification Failed</h2>
                        <p className="text-sm text-gray-600 mt-2">{message}</p>
                        <Link to="/register" className="inline-block mt-6 bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">Register Again</Link>
                    </>
                )}
            </div>
        </div>
    );
}

export default VerifyEmail;
