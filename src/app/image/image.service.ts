import { Injectable,NgZone } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';

import { ImageDB } from './image';

@Injectable()
export class ImageService{
 
  private Url: string = 'https://www.hi-techelectricals.in/hitech/gallery.php';

  
  constructor(
    private http : Http, ){
  }


  public  getReceiptImage(): Observable<ImageDB[]>{
    
    let rimage$ = this.http
      .get(`${this.Url}`, { headers: this.getHeaders()})
      .map(mapRImage)
      .catch(handleError);
      return rimage$;
  }

  
  private updateReceipt(img: ImageDB): Observable<ImageDB> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
     console.log(JSON.stringify(img));
   let rec$= this.http
  .put(`${this.Url}/${img.image_id}`, 
        JSON.stringify(img),{headers:headers})
        .map(mapRImage)
  .catch(handleError)
  return rec$;
} 

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


 function mapRImage(response:Response): ImageDB[]{ 
  return response.json().map(toImage);
}


function toImage(r:any): ImageDB{
  let image = <ImageDB>({
        image_id: r.image_id,
        image: r.image,
        date: r.date,
        project_id: r.project_id,
        venue:r.venue

    
  });
  return image;
}



function handleError (error: any) {
  let errorMsg = error.message || `Yikes! There was a problem with our hyperdrive device and we couldn't retrieve your data!`
  console.log('An error occurred', error);
  console.log(errorMsg);

  return Observable.throw(errorMsg);
}


