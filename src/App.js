import React, { useState } from 'react';
import AddTask from './Components/Tasks/AddTask'
import TaskList from './Components/UI/TaskList'

function App() {
  const [tasksList, setTasksList] = useState([]);
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
    setTasksList((prevtasksList) => {
      return prevtasksList.filter(x => x.id !== id);
    })
  }


  const doneTaskHandler = (id) => {
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
        tasks={tasksList}
        completedCount={doneCount} totalCount={totalCount}
        onDeleteTask={deleteTaskHandler} onDoneTask={doneTaskHandler}>
      </TaskList>
    </div>
  );
}

export default App;
