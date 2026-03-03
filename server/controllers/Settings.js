const Setting = require("../models/Settings");
const Model = require("../models/Model");

// Save viewer settings
const saveSettings = async (req, res) => {
  try {
    const { modelId, backgroundColor, wireframe } = req.body;

    if (!modelId) {
      return res.status(400).json({
        success: false,
        message: "modelId is required",
      });
    }

    const setting = await Setting.create({
      modelId,
      backgroundColor,
      wireframe,
    });

    return res.status(201).json({
      success: true,
      message: "Viewer settings saved",
      data: setting,
    });
  } catch (error) {
    console.error("Save settings error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while saving settings",
    });
  }
};

// Fetch viewer settings by modelId
const getSettingsByModel = async (req, res) => {
  try {
    const { modelId } = req.params;

    const settings = await Setting.find({ modelId }).sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      data: settings,
    });
  } catch (error) {
    console.error("Fetch settings error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while fetching settings",
    });
  }
};

// Fetch latest saved settings
const getLatestSettings = async (req, res) => {
  try {
    const settings = await Setting.findOne().sort({ createdAt: -1 });
    if (!settings) {
      return res.status(200).json({
        success: true,
        data: null,
        message: "No settings found",
      });
    }

    // Fetch the model URL using modelId
    const model = await Model.findById(settings.modelId);

    return res.status(200).json({
      success: true,
      data: {
        ...settings.toObject(),
        modelUrl: model ? model.fileUrl : null,
      },
    });

  } catch (err) {
    console.error("Fetch latest settings error:", err);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

module.exports = { saveSettings, getSettingsByModel, getLatestSettings };