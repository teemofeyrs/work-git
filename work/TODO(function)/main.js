const main = (document =>{
    function createElement(tag, props, ...children) {
        const element = document.createElement(tag);

        Object.keys(props).forEach(key => element[key] = props[key]);

        if(children.length > 0){
            children.forEach(child => {
                    if (typeof child === 'string') {
                        child = document.createTextNode(child);
                    }
                    element.appendChild(child);
                }
            )}
        return element;
    }
    function createTodoItem(title) {
        const checkbox = createElement('input',{type:'checkbox', className: 'checkbox'});
        const label = createElement('label',{className: 'title'}, title);
        const editInput = createElement('input',{type: 'text', className: 'textfield'});
        const editButton = createElement('button',{className: 'edit'}, 'Изменить');
        const deleteButton = createElement('button',{className: 'delete'}, 'Удалить');
        const listItem =createElement('li',{className: 'todo-item'},checkbox,label,editInput,editButton,deleteButton);
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
            if(editInput.value === "") return alert("Необходимо ввестьит задачу! ");
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
    function main(){
        todo_form.addEventListener('submit', addTodoItem);
        todoItem.forEach(elem => bindEvent(elem));
    }
    return main;
})(document);
main();