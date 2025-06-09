import { useState } from 'react';
import Expenses from 'D:/expense_tracker/aesthetic-expense-tracker/src/components/Expenses/Expenses';
import NewExpense from 'D:/expense_tracker/aesthetic-expense-tracker/src/components/NewExpense/NewExpense';
import './App.css';

// Dummy data to start with
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2023, 2, 28),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2024, 8, 12),
  },
  {
    id: 'e3',
    title: 'Groceries',
    amount: 94.12,
    date: new Date(2024, 4, 15),
  },
    {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2024, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // This function receives the new expense data from NewExpense component
  const addExpenseHandler = (expense) => {
    // We use a function form of setState to ensure we always get the latest snapshot
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="app-container">
      <header>
        <h1 style={{textAlign: "center"}}>Aesthetic Expense Tracker</h1>
      </header>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;