import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

import {Validation} from 'aurelia-validation';

@inject(HttpClient, Validation)
export class test_json2 {

  heading = "Test JSON 2";
  dataVar = [];
  dataFile = [];

  constructor(http, validation) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('http://jsonplaceholder.typicode.com/');
    });
    this.http = http;

    this.validation = validation.on(this)
      .ensure('titles.title')
      .isNotEmpty()
      .hasLengthBetween(3,10);
  }

  activate() {
/*
    this.http.fetch('posts?userId=1')//'posts?userId=1')
      .then(response => response.json())
      .then(data => {
        if (data.length > 1) {
          this.dataVar = data;
        }else {
          this.dataVar.push(data); //One row
        }
      });
*/
        /*
        Promise.all(data).then(function(dataArr){
          dataArr.forEach(function(data2){
            return data;
            alert(data2.title);
          });
        });
        */

  }

  set_one_row(){
    this.dataVar = [];
    this.http.fetch('posts/1')//'posts?userId=1')
      .then(response => response.json())
      .then(data => {
          this.dataVar.push(data); //One row
      });
  }

  set_all_rows(){
    this.dataVar = [];
    this.http.fetch('posts?userId=1')//'posts?userId=1')
      .then(response => response.json())
      .then(data => {
          this.dataVar = data;
      });
  }

  clear_page(){
    this.dataVar = [];
  }
  save_file_data(){
     var url = 'data:text/json;charset=utf8,' + encodeURIComponent(JSON.stringify(this.dataVar));
     window.open(url, '_blank');
     window.focus();

   }
}
