const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//var id = '58a71ac3cdffdb251c9b03e91';
//
//if(!ObjectID.isValid(id)) {
//  console.log('ID not valid');
//}

//Todo.find({
//  _id: id
//}).then((todos) => {
//  console.log('Todos', todos);
//});
//
//Todo.findOne({
//  _id: id
//}).then((todo) => {
//  console.log('Todo', todo);
//});

//Todo.findById(id).then((todo) => {
//  if (!todo) {
//    return console.log('Id not found');
//  }
//
//  console.log('Todo by id', todo);
//}).catch((e) => console.log(e));

User.findById('58a60051b7991d189694a362').then((user) => {
  if (!user) {
    return console.log('Id not found');
  }

  console.log('User by id', user);
}).catch((e) => console.log(e));
