import View from './abstractView';

const NotFoundView = Object.create(View);

NotFoundView.index = function () {
  this.template = `h1>Page Not Found</h1>`;
  this.pageTitle = 'Not Found';
  this.renderTemplate();
};

export default NotFoundView;
