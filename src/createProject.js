import { trackAllProjects } from './trackAllProjects.js';
import { addTodoToAllProjects } from './trackAllProjects.js';

function createProject(name="Project") {

    trackAllProjects(name);

    function addTodo(todoObject) {
        addTodoToAllProjects(this.name, todoObject.title, todoObject);
        this[todoObject.title] = todoObject;
    };


    return { name, addTodo };
};

export { createProject };