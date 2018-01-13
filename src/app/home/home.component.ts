import { Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { ImageService } from "../image/image.service";
import { ImageDB } from "../image/image";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})

export class HomeComponent implements OnInit {
  public ind:boolean=true;
  public abd:boolean=false;
  public img:ImageDB[];
  constructor( private imgS:ImageService,private _DomSanitizationService: DomSanitizer,) { 
 
  }

  ngOnInit() {
    // this.homeS.getAllReceiptImage(1).subscribe(x=>console.log(x));
     this.imgS.getReceiptImage().subscribe(res=>{this.img=res;console.log(this.img);});
     
  }
  india(){
  
    this.ind=!this.ind;
}
abroad(){
  
  this.abd=!this.abd;
}
}