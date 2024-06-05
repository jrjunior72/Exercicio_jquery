// main.js
$(document).ready(function() {
    const $taskInput = $('#newTask');
    const $addTaskButton = $('#addTask');
    const $taskList = $('#taskList');

    $addTaskButton.click(function() {
        const taskName = $taskInput.val().trim();
        if (taskName) {
            const listItem = `<li>${taskName}</li>`;
            $taskList.append(listItem);
            $taskInput.val('');
            console.log("Índice do item clicado:", listItem);
        }
    });

    $('#taskList').on('click', 'li', function() {
        $(this).toggleClass('completed'); // Aplica ou remove a linha no texto
    });

});
