const crypto = require('crypto').randomBytes(256).toString('hex'); // Provides cryptographic functionality (OpenSSL's hash, HMAC, cipher, decipher, sign and verify functions)

// Export config object
module.exports = {
//  uri: process.env.databaseUri, // Databse URI and database name
  uri: "mongodb://checkoutfood:checkoutfood123@cluster0-5ffrd.mongodb.net/",
  secret: crypto, // Cryto-created secret
  db: 'test'

}
