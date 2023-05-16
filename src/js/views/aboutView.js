import View from './abstractView';

const AboutView = Object.create(View);

AboutView.index = function () {
  this.pageTitle = 'About';
  this.template = `<h1>About</h1>`;
  this.renderTemplate();
};

export default AboutView;
