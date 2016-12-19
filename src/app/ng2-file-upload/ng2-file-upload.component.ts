import { Component } from '@angular/core';
import { FileUploader }  from 'ng2-file-upload/ng2-file-upload';
import { RotatingPlaneComponent } from 'ng-spin-kit/app/spinner/rotating-plane.component';
import { firebaseConfig } from './../firebaseconfig';

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

  app: any;
  storage: any;

  constructor(){
  }

  verdatos(){
    console.log(this.uploader)
    console.log(this.uploader.queue)
    console.log(this.uploader.queue[0])
    console.log(this.uploader.queue[0].file)
    console.log(this.uploader.queue[0].file.name)

    this.app = firebase.initializeApp(firebaseConfig);
    this.storage = this.app.storage();
    var file = this.uploader.queue[0]._file;
    var storageRef = this.storage.ref().child('fotos');
    var photoRef = storageRef.child(file.name);
    var uploadTask = photoRef.put(file);
  }

}
