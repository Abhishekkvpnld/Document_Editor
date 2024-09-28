import mongoose from "mongoose";

const docSchema = new mongoose.Schema({
  title: String,
  content: String,
  uploadedBy: String,
  date: {
    type: Date,
    default: Date.now,
  },
  lastUpdate: {
    type: Date,
    default: Date.now,
  }
});

const docModel = mongoose.model("Doc", docSchema);
export default docModel;
