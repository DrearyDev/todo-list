import { addTodoToAllProjects } from './trackAllProjects.js';

function createProject(name="Project") {

    function addTodo(title, desc, dueDate, priority, checklist) {
        let todoObject = {
            title,
            desc,
            dueDate,
            priority,
            checklist
        };

        addTodoToAllProjects(this.name, title, todoObject);
        this[title] = todoObject;
    };


    return { name, addTodo };
};

export { createProject };