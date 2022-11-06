import { Router } from "express";
import {
  renderNoteForm,
  createNewNote,
  renderNotes,
  renderEditForm,
  updateNote,
  deleteNote,
} from "../controllers/notes.controllers.js";
import { isAuthenticated } from "../config/auth.js";

const router = Router();

// nueva Nota
router.get("/notes/add", isAuthenticated, renderNoteForm);

router.post("/notes/new-note", isAuthenticated, createNewNote);

// conseguir TODAS las Notas
router.get("/notes", isAuthenticated, renderNotes);

// Editar Nota
router.get("/notes/edit/:id", isAuthenticated, renderEditForm);

router.put("/notes/edit-note/:id", isAuthenticated, updateNote);

// Borrar Nota
router.delete("/notes/delete/:id", isAuthenticated, deleteNote);

export default router;
