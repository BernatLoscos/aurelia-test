export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' },
      { route: 'test-json',     name: 'test-json',    moduleId: 'test-json',    nav: true, title: 'Test JSON' },
      { route: 'test-json2',    name: 'test-json2',   moduleId: 'test-json2',   nav: true, title: 'Test JSON 2' }
    ]);

    this.router = router;
  }
}
