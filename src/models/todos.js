module.exports = (sequelize, { INTEGER, STRING, BOOLEAN }) => {
  const TodoModel = sequelize.define('todos', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: STRING,
      allowNull: false,
    },
    description: {
      type: STRING,
      allowNull: true,
    },
    completed: {
      type: BOOLEAN,
      allowNull: false,
      defaultValue: false,
    }
  })
  return TodoModel
}