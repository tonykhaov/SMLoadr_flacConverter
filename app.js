const fs = require("fs");
const path = require("path");

const DOWNLOADS_dir = path.join(__dirname, "/DOWNLOADS");

fs.readdir(DOWNLOADS_dir, {}, (err, files) => {
  if (err) return console.log(err);
  const artistFolders = files.filter((file) => file !== ".DS_Store");
  console.log(artistFolders);
});
