const express = require("express");
const {
  getAllExpenses,
  createExpense,
  deleteExpense,
} = require("../controller/expenseController");
const router = express.Router();

router.route("/expenses").get(getAllExpenses);
router.route("/create/expense").post(createExpense);
router.route("/delete/expense/:id").delete(deleteExpense);

module.exports = router;
