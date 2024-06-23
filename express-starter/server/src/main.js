"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// This middleware allows our server to accept requests from different sources/origins
app.use((0, cors_1.default)());
// Parses incoming requests as JSON
app.use(express_1.default.json());
// Parses form data in requests
app.use(express_1.default.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3001;
// Route Setup
app.get('/api', (_req, res) => {
    res.status(200).json({ message: 'Hello from the server!' });
});
// Server Initialization
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
