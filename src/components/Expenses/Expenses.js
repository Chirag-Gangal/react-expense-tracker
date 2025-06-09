import { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import Chart from '../Chart/Chart';
import './Expenses.css';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2024');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // Data for the chart
  const chartDataPoints = [
    { label: 'Jan', value: 0 }, { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 }, { label: 'Apr', value: 0 },
    { label: 'May', value: 0 }, { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 }, { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 }, { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 }, { label: 'Dec', value: 0 },
  ];

  for (const expense of filteredExpenses) {
    const expenseMonth = expense.date.getMonth(); // 0 => January
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return (
    <div className="expenses-card">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <Chart dataPoints={chartDataPoints} />
      <ExpensesList items={filteredExpenses} />
    </div>
  );
}

export default Expenses;