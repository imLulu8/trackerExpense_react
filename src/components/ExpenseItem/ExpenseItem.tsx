import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate';


type Expense = {
    title:string;
    amount:number;
    date: Date;
  }
  

const ExpenseItem = (props: Expense) => {

  return (
    <div className='expense-item'>
        <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem
