import './style.css';
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

test.addTodo('title1', 'desc', 'due', 'priority', 'check');
test.addTodo('title2', 'desc', 'due', 'priority', 'check');
test.addTodo('title3', 'desc', 'due', 'priority', 'check');

let testtwo = createProject('AnotherProject');

testtwo.addTodo('title4', 'desc', 'due', 'priority', 'check');
testtwo.addTodo('title5', 'desc', 'due', 'priority', 'check');
testtwo.addTodo('title6', 'desc', 'due', 'priority', 'check');



handleDOM.allListView();


/*

All 'Projects' are Objects that Hold 'Todos'
All 'Todos' are Objects
'Todos' can only be made on a 'Project' but there is an 'All List View'

- You can't have 2 'Projects' with the same name

*/