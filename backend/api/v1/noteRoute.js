const express = require("express");
const noteRoute = express.Router();
const notes = require("../../data/notes");

noteRoute.get("/", (req, res, next) => {
  res.json(notes);
});

// POST Create a new note
noteRoute.post("/", (req, res, next) => {
  const newNotes = req.body;

  if (!newNotes || !newNotes.title || !newNotes.body) {
    const error = new Error(`Missing information`);
    error.status = 400;
    return next(error);
  }

  newNotes.id = notes.length + 1;
  newNotes.createdAt = new Date();
  newNotes.updatedAt = new Date();

  notes.push(newNotes);
  res.json(notes);
});

// PUT Update a note by id
noteRoute.put("/:id", (req, res, next) => {
  const id = req.params.id;
  const targetNote = notes.find((note) => note.id === Number(id));

  if (!targetNote) {
    const error = new Error(`Note with id ${id} not found`);
    error.status = 404;
    return next(error);
  }

  const updatedNote = req.body;

  targetNote.title = updatedNote.title;
  targetNote.content = updatedNote.content;
  targetNote.updated_at = new Date();

  res.json(notes);
});

// DELETE delete a note by id
noteRoute.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  const targetNoteIdx = notes.findIndex((note) => note.id === Number(id));
  if (targetNoteIdx === -1) {
    const error = new Error(`Note with id ${id} not found`);
    error.status = 404;
    return next(error);
  }

  notes.splice(targetNoteIdx, 1);
  res.status(204).json(notes);
});

module.exports = noteRoute;
