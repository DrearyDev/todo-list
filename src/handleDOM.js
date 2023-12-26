
const handleDOM = (() => {

    const body = document.querySelector('body');
    const content = document.querySelector('.content');
    let header, project, projectTitle, actions, dropDown, settings;

    const createHeader = () => {
        // create header
        header = document.createElement('div');
        header.classList.add('header');
        body.insertBefore(header, content);

        // create project div
        project = document.createElement('div');
        project.classList.add('project');
        header.appendChild(project);
        projectTitle = document.createElement('h1');
        project.appendChild(projectTitle);

        // create actions div
        actions = document.createElement('div');
        actions.classList.add('actions');
        project.appendChild(actions);

        // create dropDown div
        dropDown = document.createElement('div');
        dropDown.classList.add('drop-down');
        actions.appendChild(dropDown);

        // create settings div
        settings = document.createElement('div');
        settings.classList.add('settings');
        actions.appendChild(settings);
    };

    const allListView = () => {

        createHeader();
        projectTitle.innerText = 'All List View';



    };


    


    return { allListView };
})();

export { handleDOM };
