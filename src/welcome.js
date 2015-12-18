import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Welcome {

  _url = 'http://validate.jsontest.com/?json=[JSON-code-to-validate]';
  firstName = 'John';
  lastName = 'Doe';
  previousValue = this.fullName;

  heading = 'PRova get JSON';
  users = [];

  constructor(http) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('http://validate.jsontest.com/');
    });

    this.http = http;
  }

  //Getters can't be directly observed, so they must be dirty checked.
  //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  //To optimize by declaring the properties that this getter is computed from, uncomment the line below
  //as well as the corresponding import above.
  //@computedFrom('firstName', 'lastName')
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  submit() {
    var data = this.http.fetch('?json=[JSON-code-to-validate]')
      .then(response => response.json())
      .then(users => this.users = users);
      console.log(data);
      alert(data);
  }

  canDeactivate() {
    if (this.fullName !== this.previousValue) {
      return confirm('Are you sure you want to leave?');
    }
  }
}

export class UpperValueConverter {
  toView(value) {
    return value && value.toUpperCase();
  }
}
