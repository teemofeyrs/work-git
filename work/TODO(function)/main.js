function createTodoItem(title) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';

    const label = document.createElement('label');
    label.innerText = title;
    label.className = 'title';

    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.className = 'textfield';

    const editButton = document.createElement('button');
    editButton.className = 'edit';
    editButton.innerText = 'Изменить';

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.innerText = 'Удалить';

    const listItem = document.createElement('li');
    listItem.className = 'todo-item';

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    bindEvent(listItem);
    return listItem;

}
function bindEvent(todoItem) {
    const checkbox = todoItem.querySelector('.checkbox');
    const editButton = todoItem.querySelector('button.edit');
    const deleteButton = todoItem.querySelector('button.delete');

    checkbox.addEventListener('change', toggleTodoItem);
    editButton.addEventListener('click', editTodoItem);
    deleteButton.addEventListener('click', deleteTodoItem);
}

function toggleTodoItem(e) {
    const listItem = this.parentNode;
    listItem.classList.toggle('complited');
}
function editTodoItem(e) {
    const listItem = this.parentNode;
    const title = listItem.querySelector('.title');
    const editInput = listItem.querySelector('.textfield')
    const isEditin = listItem.classList.contains('editin');
    if(isEditin){
        title.innerText = editInput.value;
        this.innerText = 'Изменить';
    }else {
        editInput.innerHTML = title.value;
        this.innerText = 'Сохранить';
    }
    listItem.classList.toggle('editin');
}
function deleteTodoItem(e) {
   const listItem = this.parentNode;
   todo_list.removeChild(listItem);
}

function addTodoItem(e){
    e.preventDefault();
    if(add_input.value === "") return alert("Необходимо ввестьит задачу! ");

    const todoItem = createTodoItem(add_input.value);
    todo_list.appendChild(todoItem);
    add_input.value = "";
}



const todo_form =document.getElementById("todo-form");
const add_input =document.getElementById('add-input');
const todo_list = document.getElementById('todo-list');
const todoItem = document.querySelectorAll('.todo-item');
function Main(){
    todo_form.addEventListener('submit', addTodoItem);
    todoItem.forEach(elem => bindEvent(elem));
}
Main();