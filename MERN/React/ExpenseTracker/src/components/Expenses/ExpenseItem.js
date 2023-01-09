import React,{useState} from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.expense.title);

  const clickHandler = () => {
    setTitle('updated!');
    console.log('clicked', props.expense.title);
  }

  return (
    <Card className='expense-item'>
        <ExpenseDate date={props.expense.date}/>
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>${props.expense.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
    </Card>
  )
}

export default ExpenseItem