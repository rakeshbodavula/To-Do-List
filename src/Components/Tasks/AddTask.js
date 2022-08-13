import React, { useState } from 'react'
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Card from '../UI/Card';
import classes from './AddTask.module.css'

const AddTask = (props) => {

    const [enteredName, setEnteredName] = useState("")
    const [enteredDuration, setEnteredDuration] = useState("")
    const [error, setError] = useState("");
    
    const AddTaskHandler = (e) => {
        e.preventDefault();
        if (enteredName.trim().length === 0 || enteredDuration.trim().length === 0) {
            setError({
                title:"Invalid input!",
                message:"Please enter a valid task name and duration > 0"
            });
            return
        }

        if (+enteredDuration <= 0){
            setError({
                title:"Invalid Duration!",
                message:"Please enter a valid duration > 0"
            })
            return
        }
            // console.log(enteredDuration,enteredName);

        props.onAddTask(enteredName, enteredDuration); // pass up the props
        setEnteredName("")
        setEnteredDuration("")
        // document.getElementById("name").value=""
        // document.getElementById("duration").value=""
    }

    const NameChangeHandler = (event) => {
        setEnteredName(event.target.value)
    }

    const DurationChangeHandler = (event) => {
        setEnteredDuration(event.target.value)
    }

    const removeErrorHandler = ()=>{
        setError("");
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onRemoveError={removeErrorHandler}></ErrorModal>}
            <Card className={classes.input}>
                <form onSubmit={AddTaskHandler}>
                    <label htmlFor="name">Task Name</label>
                    <input type="text" id="name" value={enteredName} onChange={NameChangeHandler}></input>
                    <label htmlFor='duration'>Duration(minutes)</label>
                    <input type="number" id="duration" value={enteredDuration} onChange={DurationChangeHandler}></input>
                    <Button type="submit">Add Task</Button>
                </form>
            </Card>
        </div>
    );
}

export default AddTask;