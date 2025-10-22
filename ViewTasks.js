import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ViewTasks() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch('http://localhost:8080/api/tasks');
        const data = await res.json();
        setTasks(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTasks();
  }, []);

  return (
    <div className="container mt-5">
      <h2>All Tasks</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task._id}>
              <td>{task.name}</td>
              <td>{task.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-secondary mt-2" onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
}

export default ViewTasks;
