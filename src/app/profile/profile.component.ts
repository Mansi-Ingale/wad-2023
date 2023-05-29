import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServService } from 'src/app/serv.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userData: any;
  constructor(private router: Router, private authService: ServService) {
    this.userData = this.authService.getProfile();
}

ngOnInit(): void {}

  logout() {
    if (this.authService.logout()) {
      alert('Logout Successfully');
      this.router.navigate(['login']);
    }
  }
}