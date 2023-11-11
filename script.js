document.addEventListener('DOMContentLoaded', function () {
    const taskTitleInput = document.getElementById('taskTitle');
    const taskDescriptionInput = document.getElementById('taskDescription');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', function () {
        const title = taskTitleInput.value;
        const description = taskDescriptionInput.value;
        if(title !== '' && description !== '') {
            const listItem = document.createElement('li');
            listItem.innerHTML = `   
                <div>
                    <strong>${title}</strong>
                    <p>${description}</p>
                </div>
                <button class="delete">Delete</button>
            `;

            listItem.querySelector('.delete').addEventListener('click', function () {
                listItem.remove();
            });

            taskList.appendChild(listItem);

            taskTitleInput.value = '';
            taskDescriptionInput.value = '';
        }
        else{
            alert("please fill out this field!");
        }
    });
});