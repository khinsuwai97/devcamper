const xss = require("xss");

module.exports = (value) => (typeof value === "string" ? xss(value) : value);
