import Controller from './abstractController';
import AboutView from '../views/aboutView';

const AboutController = Object.create(Controller);
AboutController.view = AboutView;

export default AboutController;
