
const twilio = require('twilio');
const AWS = require('aws-sdk');

module.exports = (req, res) => {
  res.end(`Hello from Node.js on Now Lambda!`);
};