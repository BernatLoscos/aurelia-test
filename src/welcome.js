import {inject} from 'aurelia-framework';

export class Welcome {
  firstName = 'John';
  lastName = 'Doe';
  previousValue = this.fullName;
  heading = 'Welcome';

  submit() {
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
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
