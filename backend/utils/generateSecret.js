const { randomBytes } = require("crypto");

const generateSecret = randomBytes(64).toString("hex");

console.log(generateSecret);
