let toDoForm = document.getElementById('toDoForm');
let toDoInput = document.getElementById('toDoInput');
let toDoList = document.getElementById('toDoList');
let filter = document.getElementById('filter');
let clearTasks = document.getElementById('clearTasks');

toDoForm.addEventListener('submit', (e) => {
	e.preventDefault();
	createTask(toDoInput.value);
});

filter.addEventListener('keyup', (e) => {
	let input = e.target.value.toLowerCase();

	document.querySelectorAll('.textInput').forEach((todo) => {
		let task = todo.firstChild.textContent;
		if (task.toLowerCase().indexOf(input) != -1) {
			todo.parentElement.style.display = 'block';
		} else {
			todo.parentElement.style.display = 'none';
		}
	});
});

clearTasks.addEventListener('click', () => {
	while (toDoList.firstChild) {
		toDoList.removeChild(toDoList.firstChild);
	}
});

function createTask(todo) {
	let addTodo = `
    <div class="input-group d-block">
    <li class="list-group-item">
        <div class="input-group-prepend d-inline mr-3">
        <i class="fas fa-chevron-circle-right text-info"></i>
        </div>
        <span class="textInput">
        ${todo}
        </span>
        <button onclick="deleteTask(this)" class="float-right btn btn-outline-danger btn-sm rounded"><i class="fas fa-eraser"></i>
        </button>
    </li>
    </div>`;

	toDoList.insertAdjacentHTML('beforeend', addTodo);
	toDoInput.value = '';
	toDoInput.focus();
}

function deleteTask(todoToDelete) {
	todoToDelete.parentElement.remove();
}
