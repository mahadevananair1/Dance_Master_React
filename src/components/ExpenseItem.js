// import DateComponent from './DateComponent';
import React from "react";
import './ExpenseItem.css';
function ExpenseItem(props) {


  

  

  return (
    <div className="expense-item">
      {/* DATE Component */}
      {/* <DateComponent date={props.date}></DateComponent> */}
      <div className="expense-item__description">
        <h2>{props.name}</h2>
        <div className="expense-item__price">${props.score}</div>
      </div>
    
    </div>
  );
}

export default ExpenseItem;
