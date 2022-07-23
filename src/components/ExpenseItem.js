import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2022, 7, 24);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 623.0;

  return (
    <div className="expense-item">
      <div>{expenseDate.toLocaleDateString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
      </div>
      <div className="expense-item__price">{expenseAmount} €</div>
    </div>
  );
}

export default ExpenseItem;
