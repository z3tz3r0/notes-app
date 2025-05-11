const { errMessage } = require("../utils/errMessage");

const Note = require("../models/Note.js");
const resMessage = require("../utils/resMessage.js");

const getAllNotes = async (req, res, next) => {
  try {
    const notes = await Note.find().sort({ updatedAt: -1, isPinned: -1 });
    res.json(notes);
  } catch (err) {
    return next(errMessage(500, `Failed to fetch all notes: ${err.message}`));
  }
};

const createNewNote = async (req, res, next) => {
  const {
    title,
    content,
    tags = [],
    isPinned = false,
    isPublic = false,
  } = req.body;

  const { userId } = req.user;

  if (!title) {
    return next(errMessage(400, `Title is undefined`));
  }

  if (!content) {
    return next(errMessage(400, `Content is undefined`));
  }

  if (!userId) {
    return next(errMessage(401, `Unauthorized - no user ID found`));
  }

  try {
    const note = await Note.create({
      title,
      content,
      tags,
      isPinned,
      isPublic,
    });
    return res
      .status(201)
      .json(resMessage("Note added successfully", { note }));
  } catch (err) {
    return next(errMessage(500, `Failed to create a notes: ${err.message}`));
  }
};

const updateNoteById = async (req, res, next) => {
  const noteId = req.params.id;
  const { userId } = req.user;

  const updates = {};
  const allowedField = ["title", "content", "tags", "isPinned"];

  let hasUpdated = false;
  for (const field of allowedField) {
    if (req.body.hasOwnProperty(field)) {
      updates[field] = req.body[field];
      hasUpdated = true;
    }
  }

  if (!hasUpdated) {
    return next(errMessage(400, "No valid fields provided for update"));
  }

  try {
    const updateNote = await Note.findOneAndUpdate(
      { _id: noteId, userId: userId },
      { $set: updates },
      { new: true, runValidators: true }
    );

    if (!updateNote) {
      return next(
        errMessage(
          404,
          "Not not found or user not authorized to update this note."
        )
      );
    }
    return res.json(resMessage("Note updated successfully"));
  } catch (err) {
    return next(err);
  }
};

const togglePin = async (req, res, next) => {
  const noteId = req.params.id;
  const { isPinned } = req.body;
  const { userId } = req.user;

  try {
    const note = await Note.findOne({ _id: noteId, userId: userId });
    if (!note) {
      return next(errMessage(404, "Note not found"));
    }
    note.isPinned = isPinned;
    await note.save();

    return res.json(resMessage("Note pinned updated successfully"));
  } catch (err) {
    return next(err);
  }
};

const deleteNoteById = async (req, res, next) => {
  const noteId = req.params.id;
  const { userId } = req.user;

  try {
    const note = await Note.findOne({ _id: noteId, userId: userId });
    if (!note) {
      return next(errMessage(404, "Note not found"));
    }
    await Note.deleteOne({ _id: noteId, userId: userId });
    res.status(200).json(resMessage("Note deleted successfully"));
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  getAllNotes,
  createNewNote,
  updateNoteById,
  togglePin,
  deleteNoteById,
};
