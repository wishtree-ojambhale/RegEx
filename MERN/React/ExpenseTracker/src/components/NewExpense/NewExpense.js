import React from 'react'
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  
  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,    //pulled out all key-value pairs and add it to the expenseData object
      id: Math.random().toString()    //creates random id & converts to string
    }
    console.log(expenseData)
    props.onAddExpenseHandler(expenseData)
  }

  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseData}/>
    </div>
  )
}

export default NewExpense