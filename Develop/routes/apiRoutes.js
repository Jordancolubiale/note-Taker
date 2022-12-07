const util = require("util");
const fs = require("fs");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
const router = require("express").Router();
const db = "./db/db.json";

router.get('/notes', (req, res) => {
    return this.readFileAsync("./db/db.json", "utf8").then((notes) => {
        let parseNotes = [].concat(Json.parse(notes));
        return parseNotes
    });
});



module.exports = router;