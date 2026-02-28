const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
    const authHeader = req.headers["authorization"];

    if (!authHeader)
        return res.status(401).json({ message: "No token provided. Please login." });

    const token = authHeader.split(" ")[1];

    if (!token)
        return res.status(401).json({ message: "Invalid token format." });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: "Token is invalid or expired. Please login again." });
    }
}

module.exports = authMiddleware;
