import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title: string = 'Menú de Opciones';
  items: FirebaseListObservable<any[]>;
  image: string = './app/image.jpg';

  constructor(public af: AngularFire) {
    this.items = af.database.list('/');
   
  }

  login() {
    this.af.auth.login();
  }

  logout() {
    this.af.auth.logout();
  }



}
