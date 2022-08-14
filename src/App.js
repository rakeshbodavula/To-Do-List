import React, { useState } from 'react';
import AddTask from './Components/Tasks/AddTask'
import TaskList from './Components/UI/TaskList'

function App() {
  const [tasksList, setTasksList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  const [deletedList, setDeletedList] = useState([]);
  const [doneCount, setDoneCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const AddTaskHandler = (name, duration) => {
    setTasksList((prevtasksList) => {
      return [...prevtasksList, { name: name, duration: duration, id: Math.random().toString() }];
    })
    setTotalCount((prevTotalCount) => {
      return prevTotalCount + 1;
    })
  }

  const deleteTaskHandler = (id) => {
    setDeletedList((prevDeletedList) => {
      return [...prevDeletedList, ...tasksList.filter(x => x.id === id)];
    })
    setTasksList((prevtasksList) => {
      return prevtasksList.filter(x => x.id !== id);
    })
  }


  const doneTaskHandler = (id) => {
    setCompletedList((prevCompletedList) => {
      return [...prevCompletedList, ...tasksList.filter(x => x.id === id)];
    })
    setTasksList((prevtasksList) => {
      return prevtasksList.filter(x => x.id !== id);
    })
    setDoneCount((prevDoneCount) => {
      return prevDoneCount + 1;
    })
  }

  return (
    <div>
      <AddTask onAddTask={AddTaskHandler}></AddTask>
      <TaskList
        tasks={tasksList} flag={true}
        completedCount={doneCount} totalCount={totalCount}
        onDeleteTask={deleteTaskHandler} onDoneTask={doneTaskHandler}>
      </TaskList>
      
      <TaskList tasks={completedList}>
        <h3>Completed Tasks: {completedList.length}</h3>
      </TaskList>
      
      <TaskList tasks={deletedList} >
        <h3>Deleted Tasks: {deletedList.length}</h3>
      </TaskList>
    </div>
  );
}

export default App;
