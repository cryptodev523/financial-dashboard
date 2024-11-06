import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, "../../public/uploads/avatars");
    // Create directory if it doesn't exist
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    // Generate unique filename
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, `avatar-${uniqueSuffix}${ext}`);
  },
});

// Configure multer upload
const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    // Allow only images
    if (!file.mimetype.startsWith("image/")) {
      return cb(new Error("Only image files are allowed"));
    }
    cb(null, true);
  },
});

// Upload avatar endpoint
router.post("/upload", upload.single("avatar"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // Return the URL path to the uploaded file
    const avatarUrl = `/uploads/avatars/${req.file.filename}`;
    res.json({ url: avatarUrl });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ error: "Failed to upload file" });
  }
});

// Delete avatar endpoint
router.delete("/delete", (req, res) => {
  try {
    const { filename } = req.body;
    if (!filename) {
      return res.status(400).json({ error: "No filename provided" });
    }

    const filepath = path.join(
      __dirname,
      "../../public/uploads/avatars",
      filename
    );

    // Security check to prevent directory traversal
    const normalizedPath = path.normalize(filepath);
    const uploadsDir = path.join(__dirname, "../../public/uploads/avatars");

    if (!normalizedPath.startsWith(uploadsDir)) {
      return res.status(403).json({ error: "Invalid file path" });
    }

    // Delete file if it exists
    if (fs.existsSync(filepath)) {
      fs.unlinkSync(filepath);
    }

    res.json({ success: true });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ error: "Failed to delete file" });
  }
});

export default router;
