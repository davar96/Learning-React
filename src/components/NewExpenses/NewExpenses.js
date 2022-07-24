import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

function NewExpenses(props) {
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  }

  return (
    <div className="new-expenses">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpenses;
