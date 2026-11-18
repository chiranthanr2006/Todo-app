let todolist = JSON.parse(localStorage.getItem('todolist'))||[];
displaytodo();
 
function addtodo() {
  let inputelement = document.querySelector('#todo-input');
  let dateelement = document.querySelector('#todo-date');

  todolist.push({ item: inputelement.value, duedate: dateelement.value });
  localStorage.setItem('todolist', JSON.stringify(todolist)); // save to localStorage
  inputelement.value = '';
  dateelement.value = '';
  displaytodo();
} 

function displaytodo() {
  let containerelement = document.querySelector('.todo-list');
  let newHTML = '';

  for (let i = 0; i < todolist.length; i++) {
    let item = todolist[i].item;
    let duedate = todolist[i].duedate;

    newHTML += 
     `<span>${item}</span>
      <span>${duedate}</span>
      <button class='btn-delete' onclick="deleteTodo(${i})">Delete</button>`;
  }
  containerelement.innerHTML = newHTML;
}

function deleteTodo(index) {
  todolist.splice(index, 1);
  localStorage.setItem('todolist', JSON.stringify(todolist));// update localStorage after delete
  displaytodo();
}
