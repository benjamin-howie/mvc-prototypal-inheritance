const Controller = {
  view: null,
  model: null,
  index() {
    // Default index method will simply render the View's template.
    return () => {
      this.view.index();
    };
  },
};

export default Controller;
