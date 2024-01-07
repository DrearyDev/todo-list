import downArrowPng from './down-arrow.svg';
import settingsPng from './settings-icon.svg';
import { allProjects } from './trackAllProjects';
import CancelSvg from './cancel.svg';

const handleDOM = (() => {

    const body = document.querySelector('body');
    const content = document.querySelector('.content');
    let header, project, projectTitle, actions, downArrow, arrowMenu, settings, settingsMenu;
    let h2, projectMenu;
    let main;
    let arrowMenuItems = ['Add-Todo'];
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

    const addOptionsToMenu = (appendTo, arr) => {
        for (let i in arr) {
            let tmp = document.createElement('div');
            tmp.classList.add(`${arr[i]}`);
            tmp.innerText = `${arr[i].replace(/-/g, ' ')}`;
            appendTo.appendChild(tmp);
        };
    };

    const createIcon = (img, appendto) => {
        let tmp = new Image();
        tmp.src = img;
        tmp.classList.add('icon');
        tmp.setAttribute('draggable', false);
        appendto.appendChild(tmp);
    };

    const updatePriorityLevel = (ele, priority) => {
        if (priority === 10) { priority-- };
        ele.classList.add(priorityClasses[priority]);
    };

    const createProjectDiv = () => {
        project = document.createElement('div');
        project.classList.add('project');
        header.appendChild(project);
        projectTitle = document.createElement('div');
        projectTitle.classList.add('title');
        h2 = document.createElement('h2');
        projectTitle.appendChild(h2);
        projectMenu = document.createElement('div');
        projectMenu.classList.add('drop-down');
        projectMenuItems = allProjects.map(o => o.name);
        projectMenuItems.push('All-List-View');
        addOptionsToMenu(projectMenu, projectMenuItems);
        projectTitle.appendChild(projectMenu);
        project.appendChild(projectTitle);
    };

    const createActionsDiv = () => {
        actions = document.createElement('div');
        actions.classList.add('actions');
        project.appendChild(actions);
    };

    const createDownArrowMenu = (appendTo) => {
        downArrow = document.createElement('div');
        createIcon(downArrowPng, downArrow);
        downArrow.classList.add('down-arrow');
        arrowMenu = document.createElement('div');
        arrowMenu.classList.add('drop-down');
        addOptionsToMenu(arrowMenu, arrowMenuItems);
        downArrow.appendChild(arrowMenu);
        appendTo.appendChild(downArrow);
    };

    const createSettingsMenu = (appendTo) => {
        settings = document.createElement('div');
        createIcon(settingsPng, settings);
        settings.classList.add('settings');
        settingsMenu = document.createElement('div');
        settingsMenu.classList.add('drop-down');
        addOptionsToMenu(settingsMenu, settingsMenuItems);
        settings.appendChild(settingsMenu);
        appendTo.appendChild(settings);
    };

    const createHeader = () => {
        header = document.createElement('div');
        header.classList.add('header');
        body.insertBefore(header, content);

        createProjectDiv();

        createActionsDiv();
        createDownArrowMenu(actions);
        createSettingsMenu(actions);
    };

    const createMainDiv = () => {
        // create main div ( div with all content )
        main = document.createElement('div');
        main.classList.add('main');
        content.appendChild(main);
    };

    const renderTodo = (todo) => {
        // main todo element with title and due date
        let div = document.createElement('div');
        let divTitle = document.createElement('h2');
        divTitle.innerText = todo.title;
        let divDueDate = document.createElement('h2');
        divDueDate.innerText = todo.dueDate;
        div.appendChild(divTitle);
        div.appendChild(divDueDate);
        updatePriorityLevel(div, todo.priority);
        main.appendChild(div);

        // expand element for when todo clicked
        let expand = document.createElement('div');
        expand.classList.add('expand')
        updatePriorityLevel(expand, todo.priority);

        // add description on expand element
        let desc = document.createElement('textarea');
        desc.todo = todo; //this assocciates the element with the todo object
        desc.innerText = todo.desc;
        expand.appendChild(desc);

        // add checklist on expand element
        let checkList = document.createElement('div');
        checkList.classList.add('checklist');

        todo.checklist.forEach(object => {//array of objects
            for (let key in object) {

                let check = document.createElement('input');
                check.type = 'checkbox';
                check.id = key;
                check.name = key;
                check.value = key;
                if (object[key]) { check.setAttribute('checked', 'true') };

                let label = document.createElement('label');
                label.setAttribute('for', key);
                label.innerText = key.replace(/_/g, ' ');

                let item = document.createElement('div');
                item.classList.add('item');
                item.todo = object;
                item.appendChild(check);
                item.appendChild(label);

                checkList.appendChild(item);
            };
            expand.appendChild(checkList);
        });

        // add delete todo button
        let btn = document.createElement('button');
        btn.innerText = 'Delete Todo';
        btn.todo = todo;
        btn.delTodo = () => {
            //search allProjects array for todo and remove it
            allProjects.filter(project => {
                for (let key in project) {
                    if (key === btn.todo.title) {
                        delete project[key];
                    };
                };
            });
        };
        expand.appendChild(btn);

        div.appendChild(expand);
    };

    const addTodoForm = () => {
        const dialog = document.querySelector('dialog');

        const form = document.createElement('form');
        form.classList.add('Add-Todo');
        form.method = 'dialog';
        createIcon(CancelSvg, dialog);

        const h2 = document.createElement('h2');
        h2.innerText = 'Add Todo';
        dialog.appendChild(h2);

        const projectSelectDiv = document.createElement('div');
        projectSelectDiv.classList.add('project-select');
        const projectLabel = document.createElement('label');
        projectLabel.innerText = 'Project:'
        const projectSelect = document.createElement('select');
        projectSelect.required = true;
        for (let key in allProjects) {
            let option = document.createElement('option');
            option.innerText = allProjects[key].name.replace(/-/g, ' ');
            projectSelect.appendChild(option);
        };
        projectSelectDiv.appendChild(projectLabel);
        projectSelectDiv.appendChild(projectSelect);
        form.appendChild(projectSelectDiv);

        const titleInputDiv = document.createElement('div');
        titleInputDiv.classList.add('title-input');
        const titleLabel = document.createElement('label');
        titleLabel.innerText = 'Title:';
        const titleInput = document.createElement('input');
        titleInput.required = true;
        titleInputDiv.appendChild(titleLabel);
        titleInputDiv.appendChild(titleInput);
        form.appendChild(titleInputDiv);

        const descInputDiv = document.createElement('div');
        descInputDiv.classList.add('desc-input');
        const descLabel = document.createElement('label');
        descLabel.innerText = 'Description:';
        const descInput = document.createElement('input');
        descInput.required = true;
        descInputDiv.appendChild(descLabel);
        descInputDiv.appendChild(descInput);
        form.appendChild(descInputDiv);

        const dateInputDiv = document.createElement('div');
        dateInputDiv.classList.add('date-input');
        const dateLabel = document.createElement('label');
        dateLabel.innerText = 'Due Date:';
        const dateInput = document.createElement('input');
        dateInput.required = true;
        dateInput.type = 'date';
        dateInputDiv.appendChild(dateLabel);
        dateInputDiv.appendChild(dateInput);
        form.appendChild(dateInputDiv);

        const priorityInputDiv = document.createElement('div');
        priorityInputDiv.classList.add('priority-input');
        const priorityLabel = document.createElement('label');
        priorityLabel.innerText = 'Priority Level:';
        const priorityInput = document.createElement('input');
        priorityInput.required = true;
        priorityInput.type = 'number';
        priorityInput.min = 0
        priorityInput.max = 10
        priorityInputDiv.appendChild(priorityLabel);
        priorityInputDiv.appendChild(priorityInput);
        form.appendChild(priorityInputDiv);

        const checklistCreateDiv = document.createElement('div');
        checklistCreateDiv.classList.add('checklist-create');
        const checklistCreateLabel = document.createElement('label');
        checklistCreateLabel.innerText = 'Create Checklist:';
        checklistCreateLabel.setAttribute('for', 'checkInput');
        const checklistCreateInput = document.createElement('input');
        checklistCreateInput.id = 'checkInput';
        checklistCreateInput.maxLength = 30;
        const checklistCreateBtn = document.createElement('button');
        checklistCreateBtn.type = 'button';
        checklistCreateBtn.innerText = 'New Check';
        checklistCreateDiv.appendChild(checklistCreateLabel);
        checklistCreateDiv.appendChild(checklistCreateInput);
        checklistCreateDiv.appendChild(checklistCreateBtn);
        form.appendChild(checklistCreateDiv);
        const checklistCreated = document.createElement('div');
        checklistCreated.classList.add('created-checks');
        form.appendChild(checklistCreated);

        const submitBtn = document.createElement('button');
        submitBtn.classList.add('submit');
        submitBtn.innerText = 'Submit';
        form.appendChild(submitBtn);



        dialog.appendChild(form);
        body.appendChild(dialog);
    };

    const allListView = () => {
        if (!header) { createHeader() }
        else { content.innerText = '' };

        h2.innerText = 'All List View';

        createMainDiv();
        main.classList.add('all-list-view');

        // render all todos from all projects on screen
        allProjects.filter(object => {
            for (let key in object) {
                if (key !== 'name' && key !== 'addTodo') {
                    renderTodo(object[key]);
                };
            };
        });

        if (document.body.querySelector('dialog') === null) {
            document.body.appendChild(document.createElement('dialog'));
        };
    };

    const projectView = (projectName) => {
        main.innerText = '';

        h2.innerText = projectName.replace(/-/g, ' ');

        //filter allProjects for project that was clicked
        let result = allProjects.filter(object => {
            return object.name === projectName;
        });

        //render all todos from the selected project
        result.filter(object => {
            for (let key in object) {
                if (key !== 'name' && key !== 'addTodo') {
                    renderTodo(object[key]);
                };
            };
        });
    };





    


    return { allListView, projectView, addTodoForm };
})();

export { handleDOM };
