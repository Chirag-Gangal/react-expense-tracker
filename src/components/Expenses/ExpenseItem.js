import ExpenseDate from './ExpenseDate';
import './Expenses.css';

function ExpenseItem(props) {
  return (
    <li className="expense-item-wrapper">
      <div className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.amount.toFixed(2)}</div>
        </div>
      </div>
    </li>
  );
}

export default ExpenseItem;