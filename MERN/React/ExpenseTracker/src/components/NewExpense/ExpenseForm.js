import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({             //multiple state 
    //     entereTitle: '',
    //     enteredDate: '',
    //     enteredAmount: '',
    // })

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value)
    }

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);

        //dont update state like below
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: e.target.value,
        // })

        //instead update state like below if state depends on previous state
        // setUserInput((prevState) => {                                      //takes snapshot and has track of previous state   
        //     return { ...prevState, enteredTitle: e.target.value }          //and updates new state
        // })

    }

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
    }

    const submitHandler = (e) => {
        // console.log('submit clicked')
        e.preventDefault();              //we are preventing form from its default behaviour of sending request on click and also page is not reload and we stay on current state page.

        const expenseData = {
            // id: Math.random().toString(),
            title: enteredTitle,
            amount : enteredAmount,
            date : enteredDate,
        };
        props.onSaveExpenseData(expenseData);
        console.log(expenseData);
        setEnteredTitle('');        //to reset input fields after submit
        setEnteredAmount('');       //This is called two-way binding important
        setEnteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} required/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} onChange={amountChangeHandler} required/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2022-12-04" max="2024-12-31"  value={enteredDate} onChange={dateChangeHandler} required/>
                </div>
            </div>
            <div className="new-expense__actions">
                {/* we should not add eventlistener on button type submit especially the button which is inside form. Because when we press on submit inside form on web pages forms emits an event(Submit) to which we can listen */}
                <button type='submit'> Add Expense </button>

            </div>
        </form>
    )
}

export default ExpenseForm