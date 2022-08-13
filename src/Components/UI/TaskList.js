import React from "react";
import classes from './TaskList.module.css'
import Card from "./Card";
import Button from "./Button";

const AddTask = (props) => {
    let count=0;
    return (
        <Card className={classes.tasks}>
            <h3 className={classes.stats}>Total Tasks: {props.totalCount} &nbsp;&nbsp;Completed: <span>{props.completedCount}</span></h3>
            <ul>
                {props.tasks.map((task) => (
                    <li key={task.id}><p>{++count}) {task.name} - {task.duration} minutes</p>
                        <Button onClick={() => props.onDeleteTask(task.id)}>Delete</Button>
                        <Button onClick={() => props.onDoneTask(task.id)}>Done</Button>
                    </li>
                ))}
            </ul>
        </Card>
    )
}
    

export default AddTask