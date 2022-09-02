const Sequelize = require("sequelize");
const sequelize = require("../models/index").sequelize;

const Room = require("../models/room-model")(sequelize, Sequelize.DataTypes);
// const Rooms = db.Room;
// const Op = db.Sequelize.Op;

const addRoom = async (req, response) => {
  try {
    const roomObj = {
      name: req.body.name,
      city: req.body.city,
      price: req.body.price,
      description: req.body.description,
      parking: req.body.parking,
      garden: req.body.garden,
    };

    // const room = await Room.create(roomObj);
    // console.log("room", room);

    await Room.create(roomObj);

    response.status(200);
    response.send(roomObj);
  } catch (error) {
    console.error("POST ROOM", error);
    response.status(500);
    response.send(error);
  }
};

const getRoom = async (req, res) => {
  console.log("get room", req.params.id);
};

const searchRooms = async (req, res) => {
  const { city, parking } = req.query;
  try {
    const allRooms = await Room.findAll({
      where: { city: city, parking: parking },
    });

    res.status(200);
    res.send(allRooms);
  } catch (error) {
    console.error("SEARCH ROOMS", error);
    response.status(500);
    response.send(error);
  }
};

const getAllRooms = async (req, res) => {
  console.log("get room");

  try {
    const allRooms = await Room.findAll();
    res.status(200);
    res.send(allRooms);
  } catch (error) {
    console.error("GET ALL ROOMS", error);
    response.status(500);
    response.send(error);
  }
};

module.exports = { addRoom, getRoom, getAllRooms, searchRooms };
