const express = require("express");
const router = express.Router();
const { getDB } = require("../db/database");
const { sendContactThankYouEmail } = require("../utils/email");

router.post("/", async (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body;
        const db = getDB();

        if (!name || !email || !phone || !subject || !message)
            return res.status(400).json({ message: "All fields are required." });

        await db.execute(
            "INSERT INTO contacts (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)",
            [name, email, phone, subject, message]
        );

        await sendContactThankYouEmail(email, name);

        res.status(201).json({ message: "Your message has been sent! We'll get back to you soon." });
    } catch (error) {
        console.error("Contact error:", error);
        res.status(500).json({ message: "Something went wrong. Please try again." });
    }
});

module.exports = router;
