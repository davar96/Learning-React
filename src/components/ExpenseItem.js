import "./ExpenseItem.css";

function ExpenseItem(props) {
  const month = props.date.toLocaleDateString("en-UK", { month: "long" });
  const day = props.date.toLocaleDateString("en-UK", { month: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">{props.amount} €</div>
    </div>
  );
}

export default ExpenseItem;
