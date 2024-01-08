import { createProject } from "./createProject";
import { handleDOM } from "./handleDOM";
import { allProjects, trackAllProjects } from "./trackAllProjects";

let newCheckBtn = document.querySelector('.checklist-create button');

function submitForm(e) {
    let form = e.target.parentElement;

    if (form.classList.contains('Add-Todo')) {
        let createdChecks = document.querySelectorAll('form > .created-checks .item');
        let select = form[0].value;
        let title = form[1].value;
        let desc = form[2].value;
        let due = form[3].value;
        let priority = form[4].value;
        let checklist = [];

         // if all required fields arent empty
        if (title !== '' && desc !== '' && due !== '' && priority !== '') {
            removeDialog();

            createdChecks.forEach(item => {
                let check = item.children[0].checked;
                let label = item.children[1].innerText;
                checklist.push({[label]: check});
            });

            allProjects.forEach(object => {
                if (object.name === select.replace(/ /g, '-')) {
                    object.addTodo(title, desc, due, priority, checklist);
                };
            });

            handleDOM.projectView(select.replace(/ /g, '-'));
        };
    } else if (form.classList.contains('Add-Project')){
        let title = form[0].value;

        if (title !== '') {
            removeDialog();
            trackAllProjects(createProject(title));
            handleDOM.projectView(title);
        };
    };
};

function newCheck(e) {
    let value = e.target.previousSibling.value;
    let createdChecksDiv = document.querySelector('.created-checks');
    let labels = document.querySelectorAll('.created-checks label');

    // make sure no duplicate labels and checkboxes
    labels.forEach(label => {
        if (label.innerText === value) {
            value = '';
        };
    });

    if (value !== '') {
        let item = document.createElement('div');
        item.classList.add('item');
        let check = document.createElement('input');
        check.type = 'checkbox';
        check.id = `${value.replace(/ /g, '_')}`;
        let label = document.createElement('label');
        label.setAttribute('for', `${value.replace(/ /g, '_')}`);
        label.innerText = value;

        item.appendChild(check);
        item.appendChild(label);
        createdChecksDiv.appendChild(item);

        e.target.previousSibling.value = '';
    };
};

function removeDialog() {
    let dialog = document.querySelector('dialog');
    dialog.close();
    dialog.style.display = 'none';
    dialog.innerHTML = '';
};

function showDialog() {
    let dialog = document.querySelector('dialog');
    dialog.showModal();
    dialog.style.display = 'flex';
};

function arrowClick(e) {
    if (e.target.classList.contains('Add-Todo')) {
        handleDOM.addTodoForm();
        showDialog();
        newCheckBtn = document.querySelector('.checklist-create button');
        newCheckBtn.addEventListener('click', newCheck);
    } else {
        handleDOM.addProjectForm();
        showDialog();
    };

    let exitBtn = document.querySelector('dialog > img');
    exitBtn.addEventListener('click', removeDialog);

    let submitBtn = document.querySelector('form .submit');
    submitBtn.addEventListener('click', submitForm);
};

export { arrowClick, removeDialog };