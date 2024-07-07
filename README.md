# Easy Json Database

This database is used for the **[Scratch For Discord](https://github.com/Androz2091/scratch-for-discord)** project.<br />
Forked from [Easy-Json-Database](https://npm.im/easy-json-database).

## Example

```js
const Database = require("easy-json-database");
const db = new Database("./some-database.json-aes", {
    snapshots: {
        enabled: true,
        interval: 24 * 60 * 60 * 1000,
        folder: './backups/'
    },
    key: '12341234'
});

// Set data
db.set("Hello", "World");

// Get data
db.get("Hello"); // World

// Delete data
db.delete("Hello");

db.get("Hello"); // undefined
db.has("Hello"); // false

db.set("age", 10);
db.add("age", 1); // 11
db.subtract("age", 9); // 2

db.set("array", [ "apple" ]);
db.push("array", "orange"); // [ "apple", "orange" ]

// Clear data
db.clear();

// Get all the data
db.all();

// And it's all encrypted!
```
