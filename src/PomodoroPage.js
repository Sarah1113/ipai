
import React, { useState } from "react";
import Timer from "./Timer";
import AddTaskModal from "./AddTaskModal";
import "./styles.css"; 

const PomodoroPage = () => {
  const [tasks, setTasks] = useState([]);
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  // Function to add a new task
  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setShowAddTaskModal(false);
  };

  // Function to remove a task
  const handleRemoveTask = (taskToRemove) => {
    setTasks(tasks.filter((task) => task !== taskToRemove));
  };

  return (
    <div className="app">
      

      {/* Timer Section */}
      <section className="timer-section">
        <Timer tasks={tasks} onRemoveTask={handleRemoveTask} />
      </section>

      {/* Add Task Button */}
      <button
        className="add-task-button"
        onClick={() => setShowAddTaskModal(true)}
      >
        <span className="circle-icon">+</span>
        Add Task
      </button>

      {/* Add Task Modal */}
      {showAddTaskModal && (
        <AddTaskModal
          onClose={() => setShowAddTaskModal(false)}
          onAddTask={handleAddTask}
        />
      )}
    </div>
  );
};

export default PomodoroPage;