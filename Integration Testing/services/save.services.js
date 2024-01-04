const fs = require("fs");

const path = require("path");

function save(bookData) {
  try {
    // in our current directory, move up one directory then move into the data directory to books.json
    fs.writeFileSync(path.join(__dirname,"..", "data", "books.json"), JSON.stringify(bookData));
    
    return true;
  } catch (error) {
    return false;
  }
}

module.exports = {
    save
}