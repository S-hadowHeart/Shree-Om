// AuthContext.jsx
// Provides authentication state and helpers to the entire React app.
// Any component can call useAuth() to get the current user or login/register/logout.

import { createContext, useContext, useState } from "react";

// 1. Create the context
const AuthContext = createContext(null);

// 2. The provider component — wraps the whole app in main.jsx
export function AuthProvider({ children }) {
    // Try to load saved user from localStorage (so login persists on page refresh)
    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem("user");
        return saved ? JSON.parse(saved) : null;
    });

    const [token, setToken] = useState(() => localStorage.getItem("token") || null);

    // ─── Register ───────────────────────────────
    async function register(name, email, phone, password) {
        const res = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, phone, password }),
        });

        const data = await res.json();

        if (!res.ok) {
            // Throw the error message so the Register page can display it
            throw new Error(data.message || "Registration failed.");
        }

        return data;
    }

    // ─── Login ────────────────────────────────── 
    async function login(email, password) {
        const res = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message || "Login failed.");
        }

        setToken(data.token);
        setUser(data.user);
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        return data;
    }

    // ─── Logout ───────────────────────────────── 
    function logout() {
        setToken(null);
        setUser(null);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    }

    // 3. Provide everything to child components
    return (
        <AuthContext.Provider value={{ user, token, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// 4. Custom hook — easy to use in any component: const { user, login } = useAuth();
export function useAuth() {
    return useContext(AuthContext);
}
