module.exports = (sequelize, Sequelize) => {
  const Room = sequelize.define(
    "Rooms",
    {
      name: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.BIGINT,
      },
      description: {
        type: Sequelize.STRING,
      },
      parking: {
        type: Sequelize.BOOLEAN,
      },
      garden: {
        type: Sequelize.BOOLEAN,
      },
    },
    { tableName: "room", freezeTableName: true }
  );
  return Room;
};
