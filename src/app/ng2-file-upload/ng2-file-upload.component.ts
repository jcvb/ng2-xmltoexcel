import { Component } from '@angular/core';
import { FileUploader }  from 'ng2-file-upload/ng2-file-upload';

let template = require('./ng2-file-upload.component.html');

// const URL = '/api/';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-ng2-file-upload',
  template: template,
  styleUrls: ['./ng2-file-upload.component.css']
})
export class Ng2FileUploadComponent  {

  public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

}