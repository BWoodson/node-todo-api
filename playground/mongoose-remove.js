const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Todo.remove({}).then((result) => {
//  console.log(result);
//});

Todo.findByIdAndRemove('58aa62c2f106f781979a760a').then((todo) => {
  console.log(todo);
});
