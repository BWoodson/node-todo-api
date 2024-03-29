const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = 'abc123!';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  });
});

var hashedPassword = '$2a$10$RglaaUjzyCI5ARiWYBqriuVCxcskcarOu7DJZmpFQksezEfF5MDwC';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});

//var data = {
//  id: 17
//};
//
//var token = jwt.sign(data, '123abc');
//console.log('token:', token);
//
//var decoded = jwt.verify(token, '123abc');
//console.log('decoded:', decoded);

//var message = 'I need more bacon!';
//var hash = SHA256(message);
//
//console.log(`Message: ${message}`);
//console.log(`Hash: ${hash}`);
//
//var data = {
//  id: 4
//}
//
//var token = {
//  data,
//  hash: SHA256(JSON.stringify(data) + 'somesalt').toString()
//}
//
//var resultHash = SHA256(JSON.stringify(data) + 'somesalt').toString();
//
//if(resultHash === token.hash) {
//  console.log('Data was not changed.');
//} else {
//  console.log('Data was changed. Do not trust!');
//}
