const express = require("express");
const noteRoute = express.Router();
const {
  createNewNote,
  updateNoteById,
  deleteNoteById,
  togglePin,
  getAllNotes,
} = require("../controllers/notes.controllers");
const authUser = require("../middlewares/auth");
const Note = require("../models/Note");

noteRoute.get("/", authUser, getAllNotes);

// POST Create a new note
noteRoute.post("/", authUser, createNewNote);

// PUT Update a note by id
noteRoute.put("/:id", authUser, updateNoteById);

noteRoute.put("/toggle-pin/:id", authUser, togglePin);

// DELETE delete a note by id
noteRoute.delete("/:id", authUser, deleteNoteById);

module.exports = noteRoute;
