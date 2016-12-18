import { Component } from '@angular/core';
import { FileUploader }  from 'ng2-file-upload/ng2-file-upload';
import { RotatingPlaneComponent } from 'ng-spin-kit/app/spinner/rotating-plane.component';


let template = require('./ng2-file-upload.component.html');
declare var componentHandler: any;

// const URL = '/api/';
const URL = 'http://httpbin.org/post';

@Component({
  selector: 'app-ng2-file-upload',
  template: template,
  styleUrls: ['./ng2-file-upload.component.css'],
  
})
export class Ng2FileUploadComponent  {

  public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  verdatos(){
    console.log(this.uploader)
  }

}
