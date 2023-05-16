import Controller from './abstractController';
import ErrorView from '../views/errorView';

const ErrorController = Object.create(Controller);
ErrorController.view = ErrorView;

ErrorController.index = function (message) {
  this.view.index(message);
};

export default ErrorController;
