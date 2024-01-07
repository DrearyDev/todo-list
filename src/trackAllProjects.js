
let allProjects = [];

function trackAllProjects(project) {
    allProjects.push( project );
};

function addTodoToAllProjects(projectName, todoName, todoObject) {
    allProjects.filter(object => {
        if (object.project === projectName) {
            object[todoName] = todoObject;
        };
    });
};

export { trackAllProjects, allProjects, addTodoToAllProjects };