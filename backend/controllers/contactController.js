const Contact = require("../models/Contact");

// @desc    Get all contacts
exports.getContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
};

// @desc    Add a contact
exports.addContact = async (req, res) => {
  const contact = await Contact.create(req.body);
  res.json(contact);
};

// @desc    Update a contact
exports.updateContact = async (req, res) => {
  const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

// @desc    Delete a contact
exports.deleteContact = async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
};
