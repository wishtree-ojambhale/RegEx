import './App.css'
import ExpenseAll from './components/Expenses/ExpenseAll'
import NewExpense from './components/NewExpense/NewExpense'

function App() {
  const addExpenseHandler = (expenses) => {
    console.log(expenses);
  }

  return (
    <>
      <NewExpense onAddExpenseHandler={addExpenseHandler} />
      <ExpenseAll />
    </>
  )
}

export default App
