const {SHA256} = require('crypto-js');
const {MD5} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// var data = {
//   id: 10
// };
//
// var token = jwt.sign(data, '123abc');
// console.log(token);
//
// var decoded = jwt.verify(token, '123abc');
// console.log('Decoded', decoded);


// var message = 'I am user number 1';
// var hash = SHA256(message).toString();
// var md5 = MD5(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
// console.log(`MD5: ${md5}`);
//
// var data = {
//   id: 4
// };
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };
//
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if (resultHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed. Do not trust!');
// }

var password = 'abcq123';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

var hashedPassword = '$2a$10$1/QYkgXTdq2nhzzzKq14UOJK0hGMGqXCBswCuUjDx5HyyXU9Y6d7q';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});
