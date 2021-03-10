import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service.service';
import { UserImg } from '../services/user';

@Component({
  selector: 'rsc-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) { }


  url="url('"
  apice="')"

  ngOnInit(): void {
    this.authService.getImg().subscribe(data => this.authService.userImg = data.docs.map(e => {
      return {
       id: e.id,
       ... e.data() as any
      } as UserImg;
    }));
  }

  changePassword(){
    this.router.navigateByUrl('forgot-password');

  }

}
