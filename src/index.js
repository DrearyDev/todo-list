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

test.addTodo('title1', 'desc', 'due', 2, 'check');
test.addTodo('title2', 'desc', 'due', 6, 'check');
test.addTodo('title3', 'desc', 'due', 0, 'check');

let testtwo = createProject('AnotherProject');

testtwo.addTodo('title4', 'desc', 'due', 5, 'check');
testtwo.addTodo('title5', 'desc', 'due', 9, 'check');
testtwo.addTodo('title6', 'desc', 'due', 3, 'check');

handleDOM.allListView();

const downArrow = document.querySelector('.down-arrow');
const settings = document.querySelector('.settings');


downArrow.addEventListener('click', (e) => {
    downArrow.children[1].classList.toggle('visible');
})

settings.addEventListener('click', (e) => {
    settings.children[1].classList.toggle('visible');
})



window.addEventListener('click', (e) => {
    console.log(e);

    if (e.target !== downArrow.children[0]) {
        downArrow.children[1].classList.remove('visible');
    };

    if (e.target !== settings.children[0]) {
        settings.children[1].classList.remove('visible');
    };
});






/*

All 'Projects' are Objects that Hold 'Todos'
All 'Todos' are Objects
'Todos' can only be made on a 'Project' but there is an 'All List View'

- You can't have 2 'Projects' with the same name
- Priority must be from 0-10 (inclusive)

*/