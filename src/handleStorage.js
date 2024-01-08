import { createProject } from "./createProject";
import { allProjects } from "./trackAllProjects";
import { trackAllProjects } from "./trackAllProjects";

function updateStorage() {

    localStorage.clear();

    allProjects.forEach(project => {
        // Test: {"name:""Test","todo":{"title":...}}
        localStorage.setItem(`${project.name}`, `${JSON.stringify(project)}`);
    });
};

function retrieveFromStorage() {

    for (let i = 0; i < localStorage.length; i++) {

        let project = JSON.parse(localStorage.getItem(localStorage.key(i)))
        let name = project.name;

        let tmp = createProject(name);
        trackAllProjects(tmp);

        for (let key in project) {
            if (key !== 'name') {
                let title = key;
                let desc = project[key].desc
                let due = project[key].dueDate
                let priority = project[key].priority;
                let check = project[key].checklist;

                tmp.addTodo(title, desc, due, priority, check);
            };
        };
    };
};

export { updateStorage, retrieveFromStorage };