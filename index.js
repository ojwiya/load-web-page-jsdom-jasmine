const form = document.querySelector("#new-task-form");
const fname = document.querySelector("#new-task-input");
const lname = document.querySelector("#new-task-input");
const list_el = document.querySelector("#tasks");

//add todo
form.onsubmit = async (event) => {
  event.preventDefault();
  const todo = input.value;
  await db.todos.add({ todo });
  await getTodos();
  form.reset();
};