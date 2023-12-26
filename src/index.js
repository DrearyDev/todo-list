import './style.css';
import { createTodo } from './createTodo.js';
import { createProject } from './createProject.js';

// create new project object to store all todos
let test = createProject('ProjectName');

// add todo to the project object using addTodo method and createTodo module
test.addTodo('nameOfTodo', createTodo('title', 'description', 'duedate', 'priority', 'checklist'));
test.addTodo('anotherTodo', createTodo('0', '0', '0', '0', '0'));

// result is the project object with all todos stored as objects
console.log(test);





/*

All 'Projects' are Objects that Hold 'Todos'
All 'Todos' are Objects

*/