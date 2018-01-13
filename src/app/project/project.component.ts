import { Component, OnInit } from "@angular/core";
import { ImageService } from "../image/image.service";
import { ImageDB } from "../image/image";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.scss"]
})

export class ProjectComponent implements OnInit {
  public img:ImageDB[];
  constructor( private imgS:ImageService) { 

  }

  ngOnInit() {
    this.imgS.getReceiptImage().subscribe(res=>{this.img=res;console.log(this.img);});
  }
  refresh1(){
    window.location.reload();
    
  }
}
