const Model = require("../models/Model");

// Upload 3D model
const uploadModel = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    const model = await Model.create({
      filename: req.file.filename,
      fileUrl: `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`,
    });

    return res.status(201).json({
      success: true,
      message: "Model uploaded successfully",
      data: {
        id: model._id,
        fileUrl: model.fileUrl,
      },
    });

  } catch (error) {
    console.error("Upload error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while uploading model",
    });
  }
};

module.exports = {
  uploadModel,
};