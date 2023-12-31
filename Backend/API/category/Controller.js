const { CategoryFromModel } = require("./Model"); //schema k acording data leny wala variable template
// for database connection hum ab kuch cheezain import krengy
const { connect } = require("mongoose");
require("dotenv").config(); //for mongourl

const CreateCategory = async (req, res) => {
  const { CategoryName, CategoryImage } = req.body;

  // agar koi field missing hogi to woh mongo ki taraf jayega hi nahi
  if (!CategoryName || !CategoryImage) {
    res.status(403).json({
      message: "Some Fields are Missing",
    });
  } else {
    try {
      await connect(process.env.MONGO_URL);

      // agar DB main jo user category name likh kr bhej raha wo  category already moujood hai toh error dedo 400
      const checkExistance = await CategoryFromModel.exists({ CategoryName });
      if (checkExistance) {
        res.status(400).json({
          message: "category already exists",
        });
      } else {
        await CategoryFromModel.create({ CategoryName, CategoryImage });
        const AllCategories = await CategoryFromModel.find();
        res.json({
          message: "new Category Created",
          AllCategory: AllCategories,
        });
      }
    } catch (error) {
      res.status(400).json({
        message: "Some error came:",
        errorMessage: error.message,
      });
    }
  }
};
const CategoryByName = async (req, res) => {
  const { CategoryName } = req.query;

  try {
    await connect(process.env.MONGO_URL);
    const categoryByName = await CategoryFromModel.findOne({ CategoryName });
    res.json({ categoryByName });
  } catch (error) {
    res.status(400).json({
      message: "Some Error Came:",
      ErrorMessage: error.message,
    });
  }
};

const CategoryByID = async (req, res) => {
  const { _id } = req.query;

  try {
    await connect(process.env.MONGO_URL);
    const categoryById = await CategoryFromModel.findOne({ _id });
    res.json({ categoryById });
  } catch (error) {
    res.status(400).json({
      message: "Some Error Came:",
      ErrorMessage: error.message,
    });
  }
};

const UpdateCategory = async (req, res) => {
  // user se teeno cheezain main se jo bhi de kr krna chahy

  const { _id, CategoryName, CategoryImage } = req.body;

  const filter = { _id };
  const update = { CategoryName, CategoryImage };

  try {
    //db connection
    await connect(process.env.MONGO_URL); //connect hoga db idher
    await CategoryFromModel.findOneAndUpdate(filter, update, {
      new: true,
    });

    //   sara lany k liye
    const categoryUpdate = await CategoryFromModel.find();

    res.json({
      message: "Updation Done Succesfully",
      categoryUpdate,
    });
  } catch (error) {
    res.status(400).json({
      message: "Some Error Came:",
      ErrorMessage: error.message,
    });
  }
};

const DeleteCategory = async (req, res) => {
  const { CategoryName } = req.body;

  if (!CategoryName) {
    res.status(400).json({
      message: "Please give CategoryName",
    });
  } else {
    try {
      await connect(process.env.MONGO_URL);
      await CategoryFromModel.deleteOne({ CategoryName: CategoryName });
      const categories = await CategoryFromModel.find();

      res.json({
        message: "Category Deleted Successfully",
        categories,
      });
    } catch (error) {
      res.json({
        message: error.message,
      });
    }
  }
};

const AllCategories = async (req, res) => {
  try {
    await connect(process.env.MONGO_URL); //connect hoga db idher

    const AllCategory = await CategoryFromModel.find();
    res.json({
      Categories: AllCategory,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error:",
      messagedusra: error.message,
    });
  }
};

module.exports = {
  CreateCategory,
  AllCategories,
  CategoryByName,
  CategoryByID,
  UpdateCategory,
  DeleteCategory,
};
