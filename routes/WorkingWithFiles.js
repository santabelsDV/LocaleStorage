const express = require('express');
const router = express.Router();
const {upload} = require("../servise/WritingFile");
const {writingFiles} = require("../controler/WorkingWithFiles/WritingFiles");
const {readFile} = require("../controler/WorkingWithFiles/ReadingFile");
router.post("/upload", upload.single("image"), writingFiles);

router.get('/getFile/:filename', readFile);
ї
module.exports = {router}