import { Component, OnInit } from "@angular/core";
import { ImageService } from "../image/image.service";
import { ImageDB } from "../image/image";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { ProjectService } from "./project.service";
import { Project } from "./project";
@Component({
  selector: "app-projectdetail",
  templateUrl: "./projectdetail.component.html",
  styleUrls: ["./projectdetail.component.scss"]
})

export class ProjectdetailComponent implements OnInit {
  public imid:number;
  public img:ImageDB[];
  public pro:Project[];
  public pro1:Project[];
  imids:ImageDB;
  
  constructor( private imgS:ImageService, private route:ActivatedRoute,
                private proS:ProjectService) { 
  }

  ngOnInit() {
    
    this.imgS.getReceiptImage().subscribe(res=>{this.img=res;console.log(this.img);});
    this.imid= this.route.snapshot.params['project_id'];
    this.proS.getSingleProject(this.imid).subscribe(res=>{this.pro =res;console.log(this.pro)})
    console.log(this.imid);
    this.proS.getImageProject(this.imid).subscribe(res=>{res=this.pro1 =res;console.log(this.pro1)})
  }
}
