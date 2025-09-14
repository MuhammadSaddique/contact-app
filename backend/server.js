const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Model
const ContactSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
});
const Contact = mongoose.model("Contact", ContactSchema);

// Routes

// Get all contacts
app.get("/api/contacts", async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

// Add new contact
app.post("/api/contacts", async (req, res) => {
  const contact = new Contact(req.body);
  await contact.save();
  res.json(contact);
});

// Update contact
app.put("/api/contacts/:id", async (req, res) => {
  const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});


// Delete contact
app.delete("/api/contacts/:id", async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

// Start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch((err) => console.error(err));
