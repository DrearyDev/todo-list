import './style.css';
import { createTodo } from './createTodo.js';
import { createProject } from './createProject.js';
import { handleDOM } from './handleDOM.js';
import { allProjects } from './trackAllProjects.js';

// // create new project object to store all todos
// let test = createProject('ProjectName');

// // add todo to the project object using addTodo method and createTodo module
// test.addTodo('nameOfTodo', createTodo('title', 'description', 'duedate', 'priority', 'checklist'));
// test.addTodo('anotherTodo', createTodo('0', '0', '0', '0', '0'));

// // result is the project object with all todos stored as objects
// console.log(test);





let test = createProject('TestProject');

test.addTodo('Todo#1', createTodo('title', 'desc', 'due', 'priority', 'check'));
test.addTodo('Todo#2', createTodo('title', 'desc', 'due', 'priority', 'check'));
test.addTodo('Todo#3', createTodo('title', 'desc', 'due', 'priority', 'check'));

let testtwo = createProject('AnotherProject');

testtwo.addTodo('Todo#4', createTodo('title', 'desc', 'due', 'priority', 'check'));
testtwo.addTodo('Todo#5', createTodo('title', 'desc', 'due', 'priority', 'check'));
testtwo.addTodo('Todo#6', createTodo('title', 'desc', 'due', 'priority', 'check'));

console.log(allProjects);



handleDOM.allListView();


/*

All 'Projects' are Objects that Hold 'Todos'
All 'Todos' are Objects
'Todos' can only be made on a 'Project' but there is an 'All List View'

- You can't have 2 'Projects' with the same name

*/