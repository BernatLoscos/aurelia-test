import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class test_json2 {

  heading = "Test JSON 2";
  data = [];

  constructor(http) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('http://jsonplaceholder.typicode.com/');
    });
    this.http = http;
  }

  activate() {

    this.http.fetch('posts?userId=1')
    .then(response => response.json())
    .then(data => {
        Promise.all(data).then(function(dataArr){
          dataArr.forEach(function(data2){
          alert(data2.title);
          });
        });
    });
  }
}
