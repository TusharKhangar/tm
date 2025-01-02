import React, {useState, useEffect} from 'react'
import { listTask } from '../todoservice';

const ListTaskComponent = () =>{
    const[Task,setTask] = useState([])

    useEffect (() => {
        getAllTask();
    })

    const getAllTask = () => {
        listTask().then((Response) => {
            setTask(Response.data);
            console.log(Response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="container">
            <h2 className="text-center">List Task</h2>  
            <table className="table table-boredered table-striped">
                <thead>
                    <th>Task ID</th>
                    <th>Task Title</th>
                    <th>Task Status</th>
                </thead>
                <tbody>
                    {
                        Task.map( task => 
                            <tr key={Task.id}>
                                <td>{Task.id}</td>
                                <td>{Task.title}</td>
                                <td>{Task.status}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
export default ListTaskComponent;