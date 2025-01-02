import { useState , useEffect } from 'react'
import './App.css'
import { fetchTasks, addTask, deleteTask, editTask } from './todoservice'; // Import from api.js

const TaskMasterApp = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [editingTask, setEditingTask] = useState(null);

    const getTasks = async () => {
        try {
            const tasks = await fetchTasks();
            setTasks(tasks);
        } catch (error) {
            console.log('Error Fetching Tasks',error);
        }
  };

  useEffect(() => {
      getTasks();
  }, []);

const handleAddTask = async () => {
    try {
      const newTaskData = await addTask(newTask);
      setTasks([...tasks, newTaskData]);
      setNewTask("");
    } catch (error) {
      console.log("Error adding task", error);
    }
  };

const handleDeleteTask = async (id) => {
    try {
        await deleteTask(id);
        setTasks(tasks.filter((task) => task.id !== id));
      } catch (error) {
        console.log("Error deleting task", error);
      }
};

const handleEditTask = async (id, title) => {
    try {
        const updatedTask = await editTask(id, title);  
        setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
        setEditingTask(null);
      } catch (error) {
        console.log("Error editing task", error);
      }
};

return (
  <div>
    <h1>TaskMaster</h1>
    <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="New Task"
            />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {editingTask === task.id ? (
                            <input
                                type="text"
                                defaultValue={task.title}
                                onBlur={(e) => handleEditTask(task.id, e.target.value)}
                            />
                        ) : (
                            <>
                                {task.title}
                                <span style={{ marginRight: '1rem' }}> </span> 
                                <button onClick={() => setEditingTask(task.id)}>Edit</button>
                                <span style={{ marginRight: '1rem' }}> </span> 
                                <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};
// export default App
export default TaskMasterApp;
