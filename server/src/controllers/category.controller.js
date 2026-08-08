const categoryService = require("../services/category.service");

async function getCategories(req, res) {
  try {
    const categories = await categoryService.getAllCategories();

    res.status(200).json({
      success: true,
      count: categories.length,
      data: categories,
    });
  } catch (error) {
    console.error("Get categories error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch categories",
    });
  }
}

async function getCategory(req, res) {
  try {
    const { slug } = req.params;

    const category = await categoryService.getCategoryBySlug(slug);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    res.status(200).json({
      success: true,
      data: category,
    });
  } catch (error) {
    console.error("Get category error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch category",
    });
  }
}

module.exports = {
  getCategories,
  getCategory,
};