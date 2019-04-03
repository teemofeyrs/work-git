const colors = ['red', 'blue', 'white', 'yellow', 'brown',];

const addButton = () => {
    const container = document.querySelector('#container');
    const button = document.createElement('button');
    button.innerText = 'Click me';
    button.onclick = () => button.style.color = colors[Math.round(Math.random() * colors.length - 1)];

    container.appendChild(button);
};
export default addButton;