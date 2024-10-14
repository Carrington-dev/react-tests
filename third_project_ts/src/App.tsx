import React, { useState } from 'react';
import './App.css';
import TodoList from './components/todos/TodoList';
import Todo from './models/Todo';
import CreateTodo from './components/todos/CreateTodo';

function App() {
  // const courseTitles: String[] = [
  //   "Introduction to Computer Science",
  //   "Data Structures and Algorithms",
  //   "Web Development Fundamentals",
  //   "Artificial Intelligence and Machine Learning",
  //   "Software Engineering Principles",
  //   "Database Management Systems",
  //   "Computer Networks",
  //   "Operating Systems",
  //   "Cybersecurity Essentials",
  //   "Mobile App Development",
  //   "Cloud Computing",
  //   "Big Data Analytics",
  //   "Human-Computer Interaction",
  //   "Blockchain Technology",
  //   "Game Development Basics"
  // ];
  const courseTitles: Todo[] = [ 
    new Todo("Introduction to Computer Science"),
  ]

  const [todos, setCourseTitles] = useState(courseTitles)

  const onCreateTodo = (title: string) => {
    setCourseTitles((prev) => ([ new Todo(title), ...prev]))
  }
  // const onRemoveItem = () => {
  //   setCourseTitles((prev) => ([ ...prev.filter((item) => item.id !== todo.id )]))
  // }

  // const courses = newCourseTitles.map((course) => (new Todo(course)))
  
  
  return (
    <div >
      <CreateTodo onCreateTodo={onCreateTodo}  />
      <TodoList todos={todos}   />
    </div>
  );
}

export default App;
