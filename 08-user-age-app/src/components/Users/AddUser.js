import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import { useState } from "react";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState('');
  const[enteredAge,setEnteredAge] = useState('')
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length ===0 || enteredAge.trim().length===0) {
      return;      
    }
    if(+enteredAge<1){
      return;
    }
    console.log(enteredUserName,enteredAge);
    setEnteredUserName('');
    setEnteredAge('');    
  };

  const userNameChangeHandler = (event) =>{
    setEnteredUserName(event.target.value)
  }

  const ageChangeHandler = (event) =>{
    setEnteredAge(event.target.value);
  }


  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input 
        id="username" 
        onChange={userNameChangeHandler}
        type="text"
        value={enteredUserName} 
        />
        <label htmlFor="age">Age</label>
        <input 
        id="age" 
        onChange={ageChangeHandler}
        type="number" 
        value={enteredAge}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
