const paypal = require("paypal-rest-sdk");

const rawMode = (process.env.PAYPAL_MODE || "sandbox").trim().toLowerCase();
const mode = rawMode === "live" ? "live" : "sandbox";

paypal.configure({
  mode,
  client_id: process.env.PAYPAL_CLIENT_ID || "",
  client_secret: process.env.PAYPAL_CLIENT_SECRET || "",
});

module.exports = paypal;
