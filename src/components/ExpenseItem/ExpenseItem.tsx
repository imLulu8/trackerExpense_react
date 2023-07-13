import React from 'react'
import './ExpenseItem.css'


const ExpenseItem = () => {
    const expenseDate: any = new Date(2021,2,28);
    const expenseTitle : string = 'Car insurance';
    const expenseAmount: number = 294.67;

  return (
    <div className='expense-item'>
      <div>{expenseDate}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>{expenseAmount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem