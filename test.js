const Database = require("./index");
const db = new Database('db.json', {
    key: 'goober123',
    showWarnings: false
});

db.set("a", "b");
console.log(db.get("a")); // b
db.delete("a");
console.log(db.get("a")); // undefined
