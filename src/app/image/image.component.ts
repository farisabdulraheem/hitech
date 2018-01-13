import { Component, OnInit } from "@angular/core";
import { ImageService } from "./image.service";

@Component({
  selector: "app-image",
  templateUrl: "./image.component.html",
  styleUrls: ["./image.component.scss"]
})

export class ImageComponent implements OnInit {
  
  constructor(private imgS:ImageService) { 
    
  }

  ngOnInit() {
    this.imgS.getReceiptImage().subscribe(x=>{console.log(x)});
  }
  
}
