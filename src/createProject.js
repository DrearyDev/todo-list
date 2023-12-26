
function createProject(name="Project") {

    function addTodo(name, todoObject) {
        this[name] = todoObject;
    };



    return { name, addTodo };
};

export { createProject };