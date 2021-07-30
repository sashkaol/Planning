import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  openAdd = false;
  onClose(increased: any) {
    if (!(increased)) {
      this.openAdd = false
    }
  }
}
