import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddTask() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:8080/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, description })
      });
      const data = await res.json();
      if (res.status === 201) {
        setMessage('Task added successfully!');
        setTimeout(() => navigate('/view-tasks'), 1000);
      } else {
        setMessage(data.error);
      }
    } catch (error) {
      setMessage('Server error. Try again later.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Task Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            value={description}
            required
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Add Task</button>
      </form>
      <p className="mt-3">{message}</p>
      <button className="btn btn-secondary mt-2" onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
}

export default AddTask;
