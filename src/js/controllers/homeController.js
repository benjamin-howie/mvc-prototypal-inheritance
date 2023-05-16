import Controller from './abstractController';
import HomeView from '../views/homeView';

const HomeController = Object.create(Controller);
HomeController.view = HomeView;

export default HomeController;
