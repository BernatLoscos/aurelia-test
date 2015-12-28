import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class test_json2 {

  heading = "Test JSON 2";
  data = [];
  dataFile = [];
  ready = Promise.resolve(null);

  constructor(http) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('http://jsonplaceholder.typicode.com/');
    });
    this.http = http;
  }

  activate() {
    /*
    this.http.fetch('posts/1')
    .then(response => response.json())
    .then(data => {
      alert(data.title);
      this.data = data;
    });
    */
    this.http.fetch('posts?userId=1')
    .then(response => response.json())
    .then(data => {
      this.data = data;

/*
        Promise.all(data).then(function(dataArr){
          dataArr.forEach(function(data2){
            return data;
            alert(data2.title);
          });
        });
        */
    });
  }

  send_data(){
    /*this.data.forEach(function(promise){
      alert(promise.title);
    });*/
    /*
alert(JSON.stringify(this.data));
    this.data.forEach(function(promise){
           alert(JSON.stringify(promise));
           //this.dataFile.push(value);
       });
*/
     var url = 'data:text/json;charset=utf8,' + encodeURIComponent(JSON.stringify(this.data));
     window.open(url, '_blank');
     window.focus();

   }
}
