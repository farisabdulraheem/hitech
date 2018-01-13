import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { Http, Response, RequestOptions, Headers, ResponseContentType } from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(
   private router: Router,
  //  private http : Http,
    ) {}
  
  aboutus(){

    
  }
  getbrochure(dataUrl){
  var a = document.createElement("a");
  a.href = dataUrl;
  a.download;
  }

//   getCarsSmall() {
//     return this.http.get('assets/img/jpg2pdf.pdf')
//                 .toPromise()
//                 .then(res =>  res.json().data)
//                 .then(data => { return data; });
// }
  
}

