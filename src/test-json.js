import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class test_json {
  heading = 'Test JSON';
  users = [];
  _url = 'http://jsonplaceholder.typicode.com/posts?userId=1';

  constructor(http) {
  /*  http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('http://jsonplaceholder.typicode.com/');
    });*/
    this.http = http;
  }

  activate() {
    return this.http.fetch('http://jsonplaceholder.typicode.com/posts?userId=1')
      .then(response => response.json())
      .then(data => this.users = data);

      //alert(data);
      //return data;
  }
}
