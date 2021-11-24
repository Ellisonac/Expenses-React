import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = ({ expenses }) => {
  //const expenses = props.expenses;
  const [filterYear, setFilterYear] = useState("");

  const changeSelectHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeSelect={changeSelectHandler}
        />
        <h2 className="expenses__title">Expenses</h2>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
