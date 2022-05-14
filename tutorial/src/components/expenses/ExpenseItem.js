import "./ExpenseItem.css";
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../ui/Card.js";
import Del from "../../images/del.png";

const ExpenseItem = (props) => {
  const [display, setDisplay] = useState(true);

  const deletHandler = () => {
    fetch(`http://yexpenses.herokuapp.com/api/v1/delete/expense/${props.id}`, {
      method: `DELETE`,
    })
      .then((i) => {
        setDisplay(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {display ? (
        <Card className="expense-item">
          <ExpenseDate date={new Date(props.date)} />
          <div className="expense-item-description">
            <h2> {props.title}</h2>

            <div className="expense-item-price">₹{props.ammount}</div>
            <img
              src={Del}
              style={{ width: "40px" }}
              className="expense-item-delete "
              onClick={deletHandler}
            />
          </div>
        </Card>
      ) : (
        ""
      )}
    </div>
  );
};
export default ExpenseItem;
