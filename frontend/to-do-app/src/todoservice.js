import axios from 'axios';

const TO_DO_REST_URL = 'http://localhost:8080/tasks';

// ... your component code ...

export const fetchTasks = async () => {
  try {
    const response = await axios.get('http://localhost:8080/tasks/get'); // Use Axios for GET
    return(response.data); // Access data directly from response.data
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
};
export const addTask = async (newTask) => {
  try {
    const response = await axios.post(`${TO_DO_REST_URL}/create`, {
      title : newTask,
      status : 'To-Do'
    });
    return response.data;
  } catch (error) {
    console.error("Error adding task:", error);
    throw error;
  }
};

export const deleteTask = async (id) => {
  try {
    await axios.delete(`${TO_DO_REST_URL}/${id}`); // Use Axios for DELETE
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
};

export const editTask = async (id, title) => {
  try {
    const response = await axios.put(`${TO_DO_REST_URL}/${id}`, {
      title,
    });
    return response.data;
  } catch (error) {
    console.error("Error editing task:", error);
    throw error;
  }
};