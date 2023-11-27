const multer = require("multer");
const path = require("path");

const storageConfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "public/imagens");
  },
  filename: (req, file, callback) => {
    const time = new Date().getTime();

    callback(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storageConfig });
const multipleUpload = multer({})

module.exports = upload;
