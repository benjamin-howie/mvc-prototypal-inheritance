// The TodosModel object represents the model for managing todos.
const TodosModel = {
  todos: [],

  // Retrieves a todo with the specified id from the todos array.
  getTodo(id) {
    return this.todos.find((todo) => todo.id === id);
  },

  // Adds a new todo to the todos array.
  addTodo(todoText) {
    // Create a new todo object with an incremented id.
    const createdTodo = { id: this.todos.length + 1, text: todoText };

    // Update the todos array by appending the new todo.
    const updatedTodos = [...this.todos, createdTodo];
    this.todos = updatedTodos;
  },

  // Deletes a todo from the todos array based on the specified id.
  deleteTodo(id) {
    // Filter out the todo with the matching id and update the todos array.
    this.todos = this.todos.filter((todo) => {
      return todo.id !== +id;
    });
  },
};

export default TodosModel;
