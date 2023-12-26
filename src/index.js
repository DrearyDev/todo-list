import './style.css';
import { createTodo } from './createTodo.js';
import { createProject } from './createProject.js';


console.log(createTodo('test', '2', '3', '4', '5'));
console.log(createProject('test'));

let test = createProject('ddf');
test.todo1 = { title: 'fake todo object' };
console.log(test);



/*

All 'Projects' are Objects that Hold 'Todos'
All 'Todos' are Objects

*/