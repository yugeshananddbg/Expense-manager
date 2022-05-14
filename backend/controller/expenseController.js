const Expense = require("../model/expenseModel");
const mongoose = require("mongoose");
//Create Expense

exports.createExpense = async (req, res, next) => {
  const expense = await Expense.create(req.body);

  res.status(201).json({ success: true, expense });
};

//get all expense
exports.getAllExpenses = async (req, res) => {
  const expenses = await Expense.find();

  res.status(201).json(expenses);
};
//delet expens

exports.deleteExpense = async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid id",
    });
  }

  Expense.findByIdAndRemove(req.params.id)
    .then((pro) => {
      if (pro) {
        return res.status(200).json({
          success: true,
          message: "Removed sucessfully",
        });
      } else {
        return res.status(404).json({
          success: false,
          message: "Expense does not exists",
        });
      }
    })
    .catch((err) => {
      return res.status(400).json({
        success: false,
        error: err,
      });
    });
};
