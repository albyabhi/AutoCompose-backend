const express = require("express");
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

router.post("/generate", async (req, res) => {
    try {
        const { name, emailType, standardness, details } = req.body;  // Destructure to extract necessary fields

        console.log("Received FormData:", req.body);

        // Generate a detailed prompt
        const prompt = `
        Generate a professional ${emailType} email in a well-formatted manner.
        - Sender Name: ${name}
        - The Details of the emails that need to include: ${details}
        - Formality Level (5 being very formal (1 to 5)): ${standardness}
        
        Please ensure the email has:
        - A professional greeting.
        - A polite request for leave approval.
        - Mention of the leave period.
        - An optional note of availability (if applicable).
        - A professional closing.
        - Just generate the Email format

        Format the email appropriately.
        `;

        // Generate content using Gemini API
        const result = await model.generateContent(prompt);
        const generatedText = result.response.text();

        // Log the generated email content
        console.log("Generated Email Content:\n", generatedText);

        res.status(200).json({ emailContent: generatedText });
    } catch (error) {
        console.error("Error generating text:", error);
        res.status(500).json({ error: "Failed to generate email" });
    }
});



module.exports = router;
