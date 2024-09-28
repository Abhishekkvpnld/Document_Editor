import User from "../models/userModel.js";
import Doc from "../models/docModel.js";

export const createDoc = async (req, res) => {
  try {
    let { userId, title } = req.body;
    let user = await User.findById(userId);

    if (!user) throw new Error("Invalid User...🤦‍♂️");

    const doc = await Doc.create({
      uploadedBy: userId,
      title: title,
    });

    res.status(200).json({
      success: true,
      error: false,
      message: "Document Created Successfully...✅",
      docId: doc._id,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: true,
      message: error.message,
    });
  }
};

export const updateDoc = async (req, res) => {
  try {
    let { userId, docId, content } = req.body;

    let user = await User.findById(userId);
    if (!user) throw new Error("Invalid User...🤦‍♂️");

    const doc = await Doc.findByIdAndUpdate(docId, {
      content: content,
    });

    res.status(200).json({
      success: true,
      error: false,
      message: "Document Updated Successfully...✅",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: true,
      message: error.message,
    });
  }
};

export const getDoc = async (req, res) => {
  try {
    const { docId, userId } = req.body;

    let user = await User.findById(userId);
    if (!user) throw new Error("User not found...🤦‍♂️");

    let doc = await Doc.findById(docId);
    if (!doc) throw new Error("Invalid Document...");

    res.status(200).json({
      success: true,
      error: false,
      data: doc,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: true,
      message: error.message,
    });
  }
};

export const deleteDoc = async (req, res) => {
  try {
    let { userId, docId } = req.body;

    let user = await User.findById(userId);
    if (!user) throw new Error("Invalid User...🤦‍♂️");

    let doc = await Doc.findById(docId);
    if (!doc) throw new Error("Invalid Document");

    let deleteDoc = await Doc.findByIdAndDelete(docId);

    res.status(200).json({
      success: true,
      error: false,
      message: "Document deleted successfully...✅",
      data: deleteDoc,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: true,
      message: error.message,
    });
  }
};

export const getAllDocs = async (req, res) => {
  try {
    let { userId } = req.body;

    let user = await User.findById(userId);
    if (!user) throw new Error("Invalid user...🤦‍♂️");

    let allDoc = await Doc.find({ uploadedBy: userId });

    res.status(200).json({
      success: true,
      error: false,
      data: allDoc,
      message: "All Documents",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: true,
      message: error.message,
    });
  }
};
