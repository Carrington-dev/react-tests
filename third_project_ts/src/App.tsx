import React, { useState } from 'react';
import './App.css';
import TodoList from './components/todos/TodoList';
import Todo from './models/Todo';
import CreateTodo from './components/todos/CreateTodo';

function App() {
  const courseTitles = [
    "Introduction to Computer Science",
    "Data Structures and Algorithms",
    "Web Development Fundamentals",
    "Artificial Intelligence and Machine Learning",
    "Software Engineering Principles",
    "Database Management Systems",
    "Computer Networks",
    "Operating Systems",
    "Cybersecurity Essentials",
    "Mobile App Development",
    "Cloud Computing",
    "Big Data Analytics",
    "Human-Computer Interaction",
    "Blockchain Technology",
    "Game Development Basics"
  ];

  const [newCourseTitles, setCourseTitles] = useState(courseTitles)

  const courses = newCourseTitles.map((course) => (new Todo(course)))
  
  
  return (
    <div >
      <CreateTodo  />
      <TodoList courses={courses} />
    </div>
  );
}

export default App;
