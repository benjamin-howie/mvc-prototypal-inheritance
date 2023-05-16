import View from './abstractView';

const HomeView = Object.create(View);

HomeView.index = function () {
  this.template = `<h1>Home</h1>`;
  this.pageTitle = 'Home';
  this.renderTemplate();
};

export default HomeView;
