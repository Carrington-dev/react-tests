import React from 'react';
import './App.css';
import TodoList from './components/todos/TodoList';
import Todo from './models/Todo';

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

  const courses = courseTitles.map((course) => (new Todo(course)))
  
  console.log(courseTitles);
  
  return (
    <div >
      <TodoList courses={courses} />
    </div>
  );
}

export default App;
