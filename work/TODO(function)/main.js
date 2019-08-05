function createTodoItem(title) {
    const checkbox = document.createElement('input');
    checkbox.type = checkbox;
    checkbox.className = 'checkbox';
    const label = document.createElement('label');
    label.innerText = title;
    label.className = 'title';
    const editInput = document.createElement('input');
}
function addTodoItem(e){
    e.preventDefault();
    if(add_input.value === "") return alert("Необходимо ввестьит задачу! ");

    const listItem = createTodoItem(add_input.value);
}

const todo_form =document.getElementById("todo-form");
const add_input =document.getElementById('add-input');
const todo_list = document.getElementById('todo-list');
const todoItem = document.querySelectorAll('.todo-item');

todo_form.addEventListener('submit', addTodoItem);