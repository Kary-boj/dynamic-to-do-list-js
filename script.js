document.addEventListener('DOMContentLoaded', () => {
    
    const addButton = document.getElementById('add-tast-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    
    const addTask = () => {
        const taskText = taskInput.ariaValueMax.trim();

        if(taskText === "") {
            alert("Please enter a task.");
            return;
        }


        const listItem = document.createElement('li');
        listItem.textContent = taskText;


        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';


        removeButton.onclick = () => {
            taskList.removeChild(listItem);
        };


        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        taskInput.value = "";
    };

    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (event) => {
        if(event.key === 'Enter') {
            addTask();
        }
    });
});