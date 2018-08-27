const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var uId ='5b6b6099e16e5603277c0f22';
//var id='5b7dfc9ce3ab060e7645fdb2';

if(!ObjectID.isValid(uId)) {
  console.log('Is not valid');
}

User.find({
  _id: uId
}).then((user) => {
  console.log('User', user);
});

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
User.findOne({
  _id: uId
}).then((user) => {
  console.log('User', user);
});
// Todo.findOne ({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
User.findById(uId).then((user) => {
  if(!user){
    return console.log('id not found');
  }
  console.log('User By Id', user);
}).catch((e) => console.log(e));

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));
