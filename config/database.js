const crypto = require('crypto').randomBytes(256).toString('hex'); // Provides cryptographic functionality (OpenSSL's hash, HMAC, cipher, decipher, sign and verify functions)

// Export config object
module.exports = {
//  uri: process.env.databaseUri, // Databse URI and database name
  uri: "mongodb://marketwinks:L9sS6oOAk1sHL0yi@aws-eu-west1-cluster-tszuq.mongodb.net/",
  secret: crypto, // Cryto-created secret
  db: 'marketwinksdbprod'

}





