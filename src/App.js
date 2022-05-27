import { onValue } from "firebase/database";
import { useState,useEffect } from "react";
import {db} from "./firebase"
// import {uid} from "uid"
import {ref } from "firebase/database"
import './app.css';


// import NewExpense from "./components/ExpenseInput/NewExpense";
// import ExpenseItemGroup from "./components/ExpenseItemGroup";






function snapshotToArray(snapshot) {
  var returnArr = [];
  console.log(snapshot)

  snapshot.forEach(function(childSnapshot) {
      var item = childSnapshot.val();
      item.key = childSnapshot.key;
      // console.log(item.key)
      returnArr.push(item);
  });

  return returnArr;
};



function App() {
  
  // const [scores,setScores] = useState([]);

  let[expenses,setExpenses] = useState([])

  useEffect(() => {
    
    onValue(ref(db,"Scoreboard"),(snapshot) =>{
      setExpenses([])
      let data = snapshotToArray(snapshot);
      console.log(data);
      
      if (data != null){
        // eslint-disable-next-line array-callback-return
        Object.values(data).map((expenses) => {
          setExpenses((oldArray) => [...oldArray,expenses])
        });
      }
      
    }); 
  },[]);

  

  // const writeToDatabase = () => {
    
  //   const uuid = uid();
  //   set(ref(db,`/${uuid}`),{
  //     todo,
  //     uuid,
  //   });

  //   setTodo("");
  // };

  
  
  

  // const addExpenseDataHandler = (expenseData) =>{
  //   console.log("app.js")
  //   console.log(expenseData);

    
  //   // this method wont work we have to use prevExpenses 
  //   // object provided by react. Because we are depending on
  //   // previous dummy expense values while adding new one
    
    

  //   // setExpenses([expenseData,...expenses]);
  //   setExpenses((prevExpenses) =>{
  //     return [expenseData,...prevExpenses]
  //   } )
  // }
  
  // expenses.map((expense) => (

  //   name : expense.name

  // ))


  

  let scorelist = [...new Set(expenses)];
  
  scorelist.sort(function (a, b) {
    return b.Score-a.Score;
  });

  // console.log("ghj")
  // console.log(expenses)


  

    // const array = [1, 2, 3, 2, 3];

    // calling the function
    // passing array argument
    // let uniq = getUnique(expenses);
  return (

    

    <div className="expenses">
      <h1 style={{color: "white"}}>DANCE MASTER 🎵🎷🕺 SCOREBOARD ⭐🏆</h1>
      
      {/* <NewExpense addExpenseData = {addExpenseDataHandler}/> */}
      {/* Yeah a self closing tag is enough */}
      {/* <ExpenseItemGroup expenses = {expenses}/> */}
      
     
      {scorelist.map((expense) => (
        <>
        
            
      <div className="expense-item">
      {/* DATE Component */}
      {/* <DateComponent date={props.date}></DateComponent> */}
        <div className="expense-item__description">
          <h2 className="player-name">{expense.PlayerName}</h2>
          <div className="expense-item__price">{expense.Score}</div>
        </div>
      
      </div>
      

        </>
      
      ))}
    
      

      

    </div>
  )
  }

export default App;
