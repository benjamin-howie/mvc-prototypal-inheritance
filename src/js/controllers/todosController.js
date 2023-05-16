import Controller from './abstractController';
import TodosView from '../views/todosView';
import TodosModel from '../models/todosModel';

// Function to extract form data into an object
function getFormData(form) {
  const formData = new FormData(form);
  return Object.fromEntries(formData.entries());
}

// Create TodosController object with Controller as its prototype
const TodosController = Object.create(Controller);

// Assign TodosView and TodosModel to the Controller.
TodosController.view = TodosView;
TodosController.model = TodosModel;

// Bind events to the controller
TodosController.bindEvents = () => {
  // Bind form submit event
  TodosController.view.bindFormSubmit((e) => {
    if (e.target.matches('#add-todo-form')) {
      // Extract form data
      const todoData = getFormData(e.target);
      // Add todo using the model
      TodosController.model.addTodo(todoData.todoText);
      // Render todos using the view
      TodosController.view.renderTodos(TodosController.model.todos);
    }
  });

  // Bind click event
  TodosController.view.bindOnClick((e) => {
    if (e.target.matches('.delete-todo')) {
      // Delete todo using the model
      TodosController.model.deleteTodo(+e.target.dataset.id);
      // Render todos using the view
      TodosController.view.renderTodos(TodosController.model.todos);
    }
  });
};

// Index action of the controller
TodosController.index = () => {
  return () => {
    // Render todos using the view
    TodosController.view.renderTodos(TodosController.model.todos);
  };
};

// Show action of the controller
TodosController.show = () => {
  return (params) => {
    // Get todo from the model based on id.
    const todo = TodosController.model.getTodo(+params.id);
    if (todo) {
      // Render todo using the view
      TodosController.view.renderTodo(todo);
    } else {
      throw new Error('Something went wrong.');
    }
  };
};

// Bind events between view and the controller.
TodosController.bindEvents();

export default TodosController;
