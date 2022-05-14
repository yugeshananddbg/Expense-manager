import "./Expenses.css";
import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";
function Expenses(props) {
  return (
    <Card className="expenses">
      {props.item.map((expense) => (
        <ExpenseItem
          key={expense._id}
          id={expense._id}
          date={expense.date}
          title={expense.title}
          ammount={expense.ammount}
        />
      ))}
    </Card>
  );
}
export default Expenses;
