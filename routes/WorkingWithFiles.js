const express = require('express');
const router = express.Router();
const {upload} = require("../servise/WritingFile");
const {writingFiles} = require("../controllers/WorkingWithFiles/WritingFiles");
const {readFile} = require("../controllers/WorkingWithFiles/ReadingFile");
router.post("/upload", upload.single("image"), writingFiles);

router.get('/getFile/:filename', readFile);
ї
module.exports = {router}