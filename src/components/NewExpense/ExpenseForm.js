import { useState } from 'react';
import './NewExpense.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => setEnteredTitle(event.target.value);
  const amountChangeHandler = (event) => setEnteredAmount(event.target.value);
  const dateChangeHandler = (event) => setEnteredDate(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault(); // Prevent page reload

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount, // Convert to number
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData); // Pass data up to parent

    // Clear form
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
            required
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
            required
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2021-01-01'
            max='2024-12-31'
            value={enteredDate}
            onChange={dateChangeHandler}
            required
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;