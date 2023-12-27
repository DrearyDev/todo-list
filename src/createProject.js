import { trackAllProjects } from './trackAllProjects.js';
import { addTodoToAllProjects } from './trackAllProjects.js';

function createProject(name="Project") {

    trackAllProjects(name);

    function addTodo(name, todoObject) {
        addTodoToAllProjects(this.name, name, todoObject);//accessing the name property on 'this'
        this[name] = todoObject;//adding todoObject on new property with passed in name
    };


    return { name, addTodo };
};

export { createProject };