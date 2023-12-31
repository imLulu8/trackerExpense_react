import React from 'react'
import './ExpenseDate.css'

const ExpenseDate = (props: any) => {


    const month = props.date.toLocaleString('en-US', {month: 'short'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();
  return (
    
      <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-day'>{day}</div>
            <div className='expense-year'>{year}</div>
      </div>
    
  )
}

export default ExpenseDate
