import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddTask from './components/AddTask';
import ViewTasks from './components/ViewTasks';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-task" element={<AddTask />} />
        <Route path="/view-tasks" element={<ViewTasks />} />
      </Routes>
    </Router>
  );
}

export default App;
