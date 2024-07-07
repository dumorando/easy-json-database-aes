const Database = require("./index");
const db = new Database('db.json-aes', {
    key: 'goober123'
});

db.set("a", "b");
console.log(db.get("a")); // b
db.delete("a");
console.log(db.get("a")); // undefined
