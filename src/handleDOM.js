import downArrowPng from './down-arrow.svg';
import settingsPng from './settings-icon.svg';
import { allProjects } from './trackAllProjects';

const handleDOM = (() => {

    const body = document.querySelector('body');
    const content = document.querySelector('.content');
    let header, project, projectTitle, actions, downArrow, arrowMenu, settings, settingsMenu;
    let h2, projectMenu;
    let main;
    let arrowMenuItems = ['arrow', 'menu', 'options'];
    let settingsMenuItems = ['settings', 'menu', 'options'];
    let projectMenuItems = [];

    let priorityClasses = [
        'low',
        'low',
        'low-medium',
        'low-medium',
        'low-medium',
        'medium',
        'medium-high',
        'medium-high',
        'medium-high',
        'high'
    ];

    const addClass = (ele, addClass) => {
        ele.classList.add(addClass);
    };

    const addOptionsToMenu = (appendTo, arr) => {
        console.log(arr);
        for (let i in arr) {
            let tmp = document.createElement('div');
            addClass(tmp, `${arr[i]}`);
            changeInnerText(tmp, arr[i].replace(/-/g, ' '));
            appendTo.appendChild(tmp);
        };

    };

    const changeInnerText = (ele, changeText) => {
        ele.innerText = changeText;
    };

    const createIcon = (img, appendto) => {
        let tmp = new Image();
        tmp.src = img;
        addClass(tmp, 'icon');
        tmp.setAttribute('draggable', false);
        appendto.appendChild(tmp);
    };

    const updatePriorityLevel = (ele, priority) => {
        if (priority === 10) { priority-- };
        addClass(ele, priorityClasses[priority]);
    };

    const createProjectDiv = () => {
        project = document.createElement('div');
        addClass(project, 'project');
        header.appendChild(project);
        projectTitle = document.createElement('div');
        addClass(projectTitle, 'title');
        h2 = document.createElement('h2');
        projectTitle.appendChild(h2);
        projectMenu = document.createElement('div');
        addClass(projectMenu, 'drop-down');
        projectMenuItems = allProjects.map(o => o.project);
        projectMenuItems.push('All-List-View');
        addOptionsToMenu(projectMenu, projectMenuItems);
        projectTitle.appendChild(projectMenu);
        project.appendChild(projectTitle);
    };

    const createActionsDiv = () => {
        actions = document.createElement('div');
        addClass(actions, 'actions');
        project.appendChild(actions);
        createDownArrowMenu(actions);
        createSettingsMenu(actions);
    };

    const createDownArrowMenu = (appendTo) => {
        downArrow = document.createElement('div');
        createIcon(downArrowPng, downArrow);
        addClass(downArrow, 'down-arrow');
        arrowMenu = document.createElement('div');
        addClass(arrowMenu, 'drop-down');
        addOptionsToMenu(arrowMenu, arrowMenuItems);
        downArrow.appendChild(arrowMenu);
        appendTo.appendChild(downArrow);
    };

    const createSettingsMenu = (appendTo) => {
        settings = document.createElement('div');
        createIcon(settingsPng, settings);
        addClass(settings, 'settings');
        settingsMenu = document.createElement('div');
        addClass(settingsMenu, 'drop-down');
        addOptionsToMenu(settingsMenu, settingsMenuItems);
        settings.appendChild(settingsMenu);
        appendTo.appendChild(settings);
    };

    const createHeader = () => {
        // create header div
        header = document.createElement('div');
        addClass(header, 'header');
        body.insertBefore(header, content);

        // create project div ( div within header )
        createProjectDiv();

        // create actions div ( div that contains menus )
        createActionsDiv();
    };

    const createMainDiv = () => {
        // create main div ( div with all content )
        main = document.createElement('div');
        addClass(main, 'main');
        content.appendChild(main);
    };

    const renderTodo = (todo) => {
        let div = document.createElement('div');
        let divTitle = document.createElement('h2');
        divTitle.innerText = todo.title;
        let divDueDate = document.createElement('h2');
        divDueDate.innerText = todo.dueDate;
        div.appendChild(divTitle);
        div.appendChild(divDueDate);
        updatePriorityLevel(div, todo.priority);
        main.appendChild(div);
    };

    const clearMain = () => {
        main.innerText = '';
    };

    const defaultView = () => {
        createHeader();
        changeInnerText(h2, 'All List View');

        createMainDiv();
        addClass(main, 'all-list-view');

        // render all todos from all projects on screen
        allProjects.filter(object => {
            for (let key in object) {
                if (key !== 'project') {
                    renderTodo(object[key]);
                };
            };
        });
    };

    const allListView = () => {
        content.innerText = '';

        changeInnerText(h2, 'All List View');

        createMainDiv();
        addClass(main, 'all-list-view');

        // render all todos from all projects on screen
        allProjects.filter(object => {
            for (let key in object) {
                if (key !== 'project') {
                    renderTodo(object[key]);
                };
            };
        });
    };

    const projectView = (projectName) => {
        clearMain();

        //filter allProjects for project that was clicked
        let result = allProjects.filter(object => {
            return object.project === projectName;
        });

        //render all todos from the selected project
        result.filter(object => {
            for (let key in object) {
                if (key !== 'project') {
                    console.log(object[key]);
                    renderTodo(object[key]);
                };
            };
        });
    };


    


    return { allListView, projectView, defaultView };
})();

export { handleDOM };
