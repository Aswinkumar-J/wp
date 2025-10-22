import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container text-center mt-5">
      <h1>Task Manager</h1>
      <Link className="btn btn-primary m-2" to="/add-task">Add Task</Link>
      <Link className="btn btn-success m-2" to="/view-tasks">View Tasks</Link>
    </div>
  );
}

export default Home;
