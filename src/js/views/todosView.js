import View from './abstractView';

// Create a new object based on the View prototype
const TodosView = Object.create(View);

// Bind the form submit event to a handler function from the controller.
TodosView.bindFormSubmit = function (handler) {
  this.appElem.addEventListener('submit', (e) => {
    e.preventDefault();
    handler(e);
  });
};

// Bind the click event to a handler function from the controller.
TodosView.bindOnClick = function (handler) {
  this.appElem.addEventListener('click', (e) => {
    handler(e);
  });
};

// Render a single todo item
TodosView.renderTodo = function (todo) {
  this.pageTitle = `${todo.text} -- Todo`;
  this.template = `<h2>Single Todo -- ${this.sanitize(todo.text)}</h2>`;
  this.renderTemplate();
};

// Render the list of todos
TodosView.renderTodos = function (todos) {
  this.pageTitle = 'Todos List';
  this.template = `
  <h1>Todos</h1>
  <form class="todos" id="add-todo-form">
    <input name="todoText" type="text" class="add-todo" />
    <input type="submit" />
  </form>
  <ul>
    ${todos
      .map(
        (todo) =>
          `<li><a data-link href="/todos/${todo.id}">${this.sanitize(
            todo.text
          )}</a><button class="btn delete-todo" data-id="${
            todo.id
          }">Delete</button></li>`
      )
      .join('')}
  </ul>
`;

  this.renderTemplate();
};

export default TodosView;
