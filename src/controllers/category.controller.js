import Category from "../models/category.model.js";

export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    // validation
    if (!name) {
      return res.json({
        success: false,
        message: "Category name is required",
      });
    }

    // check duplicate
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return res.json({
        success: false,
        message: "Category already exists",
      });
    }

    const category = await Category.create({ name });

    return res.status(201).json({
      success: true,
      message: "Category created successfully",
      data: category,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find({ isActive: true })
      .select("_id name")
      .sort({ createdAt: 1 }); 

    return res.status(200).json({
      success: true,
      count: categories.length,
      data: categories,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch categories",
      error: error.message,
    });
  }
};
