const Sequelize = require('sequelize');
const TodoModel = require('./todos')

const sequelize = new Sequelize('postgres://root:root@127.0.0.1:5432/postgres');

// async function test () {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection!.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }

// test()

const todosModel = TodoModel(sequelize, Sequelize)

sequelize.sync({ force:true }).then(() => { console.log('All set, my dude!') })

module.exports = { todosModel }