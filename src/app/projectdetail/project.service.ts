
import { Injectable,NgZone } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import { Project } from './project';


@Injectable()
export class ProjectService{
 
  private Url: string = 'http://hi-techelectricals.in/hitech/singleproject.php?project_id';
  private BUrl:string ='https://www.hi-techelectricals.in/hitech/projectimage.php?project_id';
  
  constructor(
    private http : Http, ){
  }


  public  getSingleProject(id:number): Observable<Project[]>{
    let Url= `${this.Url}=${id}`;
    console.log(Url);
    let rimage$ = this.http
      .get(`${this.Url}=${id}`)
      .map((res:Response)=>res.json())
      .catch(handleError);
      return rimage$;
  }

  public  getImageProject(id:number): Observable<Project[]>{
    let BUrl= `${this.BUrl}=${id}`;
    console.log(BUrl);
       let rimage$ = this.http
      .get(`${this.BUrl}=${id}`)
      .map((res:Response)=>res.json())
      .catch(handleError);
      return rimage$;
  }
  
//   private updateReceipt(img: ImageDB): Observable<ImageDB> {
//     let headers = new Headers({ 'Content-Type': 'application/json' });
//      console.log(JSON.stringify(img));
//    let rec$= this.http
//   .put(`${this.Url}/${img.image_id}`, 
//         JSON.stringify(img),{headers:headers})
//         .map(mapRImage)
//   .catch(handleError)
//   return rec$;
// } 

//   createImage(img: ImageDB):Observable<ImageDB>{
//     console.log("I am in createImage");
//     let headers1 = new Headers({ 'Content-Type': 'application/json' });
//     console.log(JSON.stringify(img));
    
//    let rec$= this.http
//       .post(`${this.Url}/receiptimages`,
//        JSON.stringify(img), {headers:headers1})
//       .map(res=>{res.json();console.log(res);})
//       .catch(handleError)
//       return rec$;
//     }
//     deleteImage(ReceiptImageID: number): Observable<ReceiptImage> {
//       console.log("In Delete",ReceiptImageID);
//       let headers1 = new Headers({ 'Content-Type': 'application/json' });
//       const url = `${this.Url}/ReceiptImages/${ReceiptImageID}`;
//       return this.http.delete(url, {headers: headers1})
//       .do(() => null)
//       .catch(handleError);
//   }  
  

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
    private extractData(response: Response) {
        let body = response.json();
        return body.data || {};
    }
}


 function mapRImage(response:Response): Project[]{ 
  return response.json().map(toImage);
}


function toImage(r:any): Project{
  let image = <Project>({
    projectID: r.projectID,
    projectName: r.projectName,
    projectDescription: r.projectDescription,
    projectLocation: r.projectLocation,
    projectVenue: r.projectVenue
    
  });
  return image;
}



function handleError (error: any) {
  let errorMsg = error.message || `Yikes! There was a problem with our hyperdrive device and we couldn't retrieve your data!`
  console.log('An error occurred', error);
  console.log(errorMsg);

  return Observable.throw(errorMsg);
}


