import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  providers: [ UserService ]
})
export class DashboardComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.getUserInfo(localStorage.getItem('MEANSOCIALtoken'))
    .then( data => {
      console.log(data)
    })
    // Error : problème serveur
    .catch( err  => {
      console.error(err)
    })

  }

}
