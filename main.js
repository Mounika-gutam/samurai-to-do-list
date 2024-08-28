document.getElementById('add-task-btn').addEventListener('click', function() {
    document.getElementById('task-modal').style.display = 'block';
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('task-modal').style.display = 'none';
});

document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const taskTitle = document.getElementById('task-title').value;
    const taskCategory = document.getElementById('task-category').value;
    const taskDeadline = document.getElementById('task-deadline').value;
    const taskPriority = document.getElementById('task-priority').value;

    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item', taskPriority);
    taskItem.innerHTML = `
        <p><strong>${taskTitle}</strong></p>
        <p>Deadline: ${taskDeadline}</p>
        <p>Priority: ${taskPriority.charAt(0).toUpperCase() + taskPriority.slice(1)}</p>
    `;

    const taskList = document.getElementById(`${taskCategory}-list`);
    taskList.appendChild(taskItem);

    updateTaskCounts();
    document.getElementById('task-modal').style.display = 'none';
    document.getElementById('task-form').reset();
});

function updateTaskCounts() {
    document.getElementById('todo-count').textContent = document.getElementById('todo-list').children.length;
    document.getElementById('progress-count').textContent = document.getElementById('progress-list').children.length;
    document.getElementById('done-count').textContent = document.getElementById('done-list').children.length;
}
