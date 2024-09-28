export const createDoc = async (req, res) => {
  try {
    let body = req.body;

    res.status(200).json({
      success: true,
      error: false,
      message: "Document Created Successfully...✅",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: true,
      message: error.message,
    });
  }
};
