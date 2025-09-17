const express = require("express");
const router = express.Router();
const {
  getContacts,
  addContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

// GET all contacts
router.get("/", getContacts);

// POST new contact
router.post("/", addContact);

// PUT update contact
router.put("/:id", updateContact);

// DELETE contact
router.delete("/:id", deleteContact);

module.exports = router;
