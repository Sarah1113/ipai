import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PomodoroPage from "./PomodoroPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/pomodoro" />} />
        <Route path="/pomodoro" element={<PomodoroPage />} />

      </Routes>
    </Router>
  );
}

export default App;
