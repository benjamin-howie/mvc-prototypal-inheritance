import AboutController from './controllers/aboutController.js';
import HomeController from './controllers/homeController.js';
import TodosController from './controllers/todosController.js';
import NotFoundController from './controllers/notFoundController.js';
import ErrorController from './controllers/errorController.js';

// Define the routes and their associated actions
const routes = [
  { path: '/', action: HomeController.index() },
  { path: '/about', action: AboutController.index() },
  { path: '/todos', action: TodosController.index() },
  { path: '/todos/:id', action: TodosController.show() },
  { path: '/404', action: NotFoundController.index() },
  { path: '(.*)', action: () => navigateTo('/404') },
];

// Router function to handle navigation and execute the corresponding action
const router = () => {
  const path = window.location.pathname;

  // Find the matching route based on the current path
  const route = routes.find(function (route) {
    const regex = new RegExp(`^${route.path.replace(/:\w+/g, '([^/]+)')}$`);
    const match = path.match(regex);
    if (match) {
      const params = {};
      const paramNames = route.path.match(/:\w+/g);
      if (paramNames) {
        paramNames.forEach((paramName, i) => {
          const paramNameWithoutColon = paramName.substring(1); // Remove the leading ":"
          params[paramNameWithoutColon] = match[i + 1]; // Assign the matched parameter value
        });
      }
      route.params = params; // Store the extracted parameters in the route object
      return true; // Route match found
    }
    return false; // No route match
  });

  // Execute the action associated with the matched route
  if (route) {
    try {
      route.action(route.params); // Pass the parameters to the action function
    } catch (e) {
      ErrorController.index(e.message); // Handle any errors thrown during the action execution
    }
  }
};

// Function to navigate to a specific URL and trigger the router
const navigateTo = (url) => {
  window.history.pushState(null, null, url); // Update the browser history

  router(); // Trigger the router to handle the new URL
};

// Event listener for click events on elements with data-link attribute
document.addEventListener('click', (event) => {
  if (event.target.matches('[data-link]')) {
    event.preventDefault();
    navigateTo(event.target.href); // Navigate to the URL specified in the href attribute
  }
});

// Event listener for popstate event when the browser history changes
window.addEventListener('popstate', router); // Trigger the router when the history changes

export default router; // Export the router function
