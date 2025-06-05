import multer from 'multer'
import path from 'path'

// Allowed MIME types

const allowedTypes = [
    'image/jpeg',
    'image/png',
    'image/webp',
    'audio/mpeg',
    'video/mp4',
    'application/pdf',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/')
    },
    filename: (req, res, cb) => {
        const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null, uniqueName + ext);
    }
});

// Multer Setup

const upload = multer({
    storage,
    limits: {
        fileSize: 10*1024*1024
    },
    fileFilter
});

module.exports = upload;