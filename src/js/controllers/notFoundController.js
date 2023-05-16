import Controller from './abstractController';
import NotFoundView from '../views/notFoundView';

const NotFoundController = Object.create(Controller);
NotFoundController.view = NotFoundView;

export default NotFoundController;
