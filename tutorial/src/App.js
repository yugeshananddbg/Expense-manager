import Expenses from "./components/expenses/Expenses";
import React, { useState, useEffect } from "react";
import NewExpense from "./components/NewExpenses/NewExpense";
import Loader from "./components/ui/Loader";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [load, setLoad] = useState(false);
  const fetchData = () => {
    fetch("https://yexpenses.herokuapp.com/api/v1/expenses")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((res) => {
        setExpenses(res);
        console.log(res);
        setLoad(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addExpenseHandler = (expense) => {
    setLoad(false);
    fetch("https://yexpenses.herokuapp.com/api/v1/create/expense", {
      method: `POST`,
      body: JSON.stringify(expense),
      headers: {
        "content-Type": "application/json",
      },
    })
      .then((response) => {
        fetchData();
        return response.json();
        setLoad(true);
      })
      .then(() => {});
  };
  return (
    <div>
      {load ? (
        <div>
          <NewExpense onAddExpense={addExpenseHandler} />

          <Expenses item={expenses} />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};
export default App;
