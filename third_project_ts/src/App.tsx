import React, { useContext, useState } from 'react';
import './App.css';
import TodoList from './components/todos/TodoList';
import Todo from './models/Todo';
import CreateTodo from './components/todos/CreateTodo';
import TodoContextProvider, { TodoContext } from './store/todo-context-api';

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
  
  // const courses = newCourseTitles.map((course) => (new Todo(course)))
  const { addTodo: onCreateTodo, removeTodo: onRemoveItem, todos } = useContext(TodoContext)
  
  return (
    <TodoContextProvider >
      <CreateTodo onCreateTodo={onCreateTodo}  />
      <TodoList todos={todos} onRemoveItem={onRemoveItem}  />
    </TodoContextProvider>
  );
}

export default App;
