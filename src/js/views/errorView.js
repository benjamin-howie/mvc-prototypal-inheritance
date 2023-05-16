import View from './abstractView';

const ErrorView = Object.create(View);

ErrorView.index = function (message) {
  this.pageTitle = 'Something went wrong';
  this.template = `<h1>Something Went Wrong</h1>
                  <p>${message}</p>`;
  this.renderTemplate();
};

export default ErrorView;
