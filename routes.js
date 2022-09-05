const router = require("express").Router();

const RoomController = require("./controllers/roomController");

router.post("/add-room", RoomController.addRoom);
router.get("/get-rooms", RoomController.getAllRooms);
router.get("/get-room/:id", RoomController.getRoom);
router.get("/search-rooms", RoomController.searchRooms);

module.exports = router;
