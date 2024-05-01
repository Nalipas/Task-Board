// Dependencies
const taskTitle = $('#task-title');
const taskDueDate = $('#task-date');
const taskDesc = $('#task-desc');
const submitBtn = $('#submit');
const closeBtn = $('#close-btn');
const taskForm = $('#task-form');
const toDoCards = $('#todo-cards');
const inProgCards = $('#in-progress-cards');
const completedCards = $('#completed-cards');

const newTaskCard = {};

// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Generates a new task ID
function generateTaskId() {
    const taskId = Math.floor(Math.random()* 1000000);
    return taskId;
}

// Creates a new task card using the data entered by the user
function createTaskCard(taskList) {
    const taskCard = $('<div>')
        .addClass('card text-center my-3 draggable droppable sortable')
        .attr('data-task-id', taskList.id);
    const titleEl = $('<h3>')
        .addClass('card-header')
        .text(taskList.taskTitle);
    const cardBody = $('<div>')
        .addClass('card-body text');
    const descEl = $('<p>')
        .addClass('card-title')
        .text(taskList.desc);
    const dateEl = $('<p>')
        .addClass('card-title')
        .text(taskList.date);
    const deleteBtn = $('<button>')
        .addClass('btn btn-danger')
        .attr('data-task-id', taskList.id)
        .text('Delete');
    deleteBtn.on('click', handleDeleteTask);


    // Changes styling of task card if task date matches today.
    const today = dayjs();
    const taskDueDate = dayjs(taskList.date, 'DD/MM/YYYY');

    if (taskList.date && taskList.status !== 'complete') {
        if (today.isSame(taskDueDate, 'day')) {
            taskCard.addClass('bg-warning text-white');
        } else if (today.isAfter(taskDueDate)) {
            taskCard.addClass('bg-danger text-white');
            deleteBtn.addClass('border-white');
        }
    }

    // Appends title, cardy body, and delete button to the new task
    taskCard.append(titleEl, cardBody, deleteBtn);

    // Appends description and date to the cardBody, so they exist within the newly created div
    cardBody.append(descEl, dateEl);

    return taskCard;
}

// Renders the task list and makes the cards draggable
function renderTaskList() {
    const taskLists = JSON.parse(localStorage.getItem('tasks')) || []; 

    toDoCards.empty();
    inProgCards.empty();
    completedCards.empty();

    for (let taskList of taskLists) {
        if (taskList.status === 'to-do') {
        toDoCards.append(createTaskCard(taskList));
        } else if (taskList.status === 'in-progress') {
        inProgCards.append(createTaskCard(taskList));
        } else if (taskList.status === 'complete') {
        completedCards.append(createTaskCard(taskList));
        }
    }

  // Uses JQuery UI to make task cards draggable
    $('.draggable').draggable({
        opacity: 0.6,
        zIndex: 999,
    // Creates a clone of the card being dragged
        helper: function (e) {
      // Checks if the target of the drag event is the parent card or a child element
            const original = $(e.target).hasClass('.draggable')
                ? $(e.target)
                : $(e.target).closest('.draggable');
      // Displays the clone card with matching width to the original card
            return original.clone().css({
                width: original.outerWidth(),
            });
        },
    });
}

// Handles addition of new tasks.
function handleAddTask(event) {
    if (!taskTitle.val() || !taskDueDate.val() || !taskDesc.val()) {
        console.log('Invalid data!');
        return alert('Fields cannot be empty!');
    }

    const title = taskTitle.val().trim();
    const date = taskDueDate.val();
    const desc = taskDesc.val();

    const newTaskCard = {
        id: generateTaskId(),
        taskTitle: title,
        date: date,
        desc: desc,
        status: 'to-do',
    };

    const taskLists = JSON.parse(localStorage.getItem('tasks')) || [];
    taskLists.push(newTaskCard);
    localStorage.setItem('tasks', JSON.stringify(taskLists));
    renderTaskList();
}

// Handles deleteing tasks.
function handleDeleteTask(event) {
    const taskId = $(this).attr('data-task-id');
    const taskLists = JSON.parse(localStorage.getItem('tasks'));
    console.log('button id: ', taskId);

    taskLists.forEach((taskList) => {
        console.log('tasklistID: ', taskList.id);
        if (taskList.id == taskId) {
            console.log('delete button pressed');
            taskLists.splice(taskLists.indexOf(taskList), 1);
        }
    });

    taskLists.push(newTaskCard);
    localStorage.setItem('tasks', JSON.stringify(taskLists));
    renderTaskList();
}


// Handles drop event for dropping task cards into different status lanes.
function handleDrop(event, ui) {
    const taskLists = JSON.parse(localStorage.getItem('tasks'));
    const taskIds = ui.draggable[0].dataset.taskId;
    const newStat = event.target.id;

    for (let taskList of taskLists) {
        if (taskList.id == taskIds) {
        taskList.status = newStat;
        }
    }

    localStorage.setItem('tasks', JSON.stringify(taskLists));
    renderTaskList();
}

// Renders the task list, adds event listeners, makes lanes droppable, and turns due date field into a date picker.

taskForm.on('click', '.btn-delete-task', handleDeleteTask);
submitBtn.on('click', handleAddTask);

$(document).ready(function () {
    renderTaskList();

    // Adds date picker to task date input box.
    $('#task-date').datepicker({
        changeMonth: true,
        changeYear: true,
    });

    // Makes lanes droppable.
    $('.lane').droppable({
        accept: '.draggable',
        drop: handleDrop,
    });

    // Closes modal when clicking on "x" in top right corner of modal.
    $('#close-btn').on('click', function() {
        const modalId = $(this).closest('.modal').attr('id');
        $('#' + modalId).modal('hide');
    });
});
