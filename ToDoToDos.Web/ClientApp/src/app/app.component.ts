import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title = 'ClientApp';

  constructor(private router: Router) { }

  onReload() {
    if (localStorage.getItem('token') == null){
      this.router.navigate(['/user/login']);
    }
  }
}
