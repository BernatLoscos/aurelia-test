import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class test_json {
  heading = 'Test JSON';
  users = [];
  _url = 'http://jsonplaceholder.typicode.com/posts?userId=1';

  constructor() {
  /*  http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('http://jsonplaceholder.typicode.com/');
    });*/
    this.http = new HttpClient();
  }

  activate() {
    this.http.fetch(this._url)
      .then(response => response.json())
      .then(data => this.users = data);

      //alert(data);
      //return data;
  }
}
