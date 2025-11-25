import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(private router: Router){

  }

  public logout(){
    localStorage.removeItem('TestAppLoggedIn');
    this.router.navigateByUrl('/sign-up');
  }
}
