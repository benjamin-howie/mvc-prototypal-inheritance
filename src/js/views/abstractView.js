const View = {
  appElem: null, // Reference to the DOM element where the view will be rendered
  template: '', // The HTML template for the view
  set pageTitle(val) {
    // Setter for the page title property
    document.title = val; // Set the page title in the browser's document
  },
  sanitize(str) {
    // Sanitizes the given string to prevent HTML injection
    const temp = document.createElement('div'); // Create a temporary div element
    temp.textContent = str; // Set the string as the div's text content
    return temp.innerHTML; // Return the HTML content of the div (sanitized string)
  },
  mount(selector) {
    // Mounts the view to a DOM element specified by the selector
    this.appElem = document.querySelector(selector); // Find the DOM element using the selector and assign it to appElem
  },
  index() {
    // Default index function will simply render the template
    this.renderTemplate();
  },
  renderTemplate() {
    // Renders the template to the appElem
    this.appElem.innerHTML = this.template; // Set the appElem's innerHTML to the template HTML
  },
};

View.mount('#app'); // Mount the view to the element with ID 'app'

export default View;
