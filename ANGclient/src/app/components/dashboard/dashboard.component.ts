import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  providers: [ UserService ]
})
export class DashboardComponent implements OnInit {

  // Loader
  public loaderIsClose: boolean = true;
  public loaderIsRight: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.getUserInfo(localStorage.getItem('MEANSOCIALtoken'))
    .then( data => {

      // Introduction
      window.setTimeout(()=>{
        this.loaderIsRight = true;
        window.setTimeout(()=>{
          this.loaderIsClose = false;
          this.loaderIsRight = false;
        }, 300);
      }, 300);

      console.log(data)
    })
    // Error : problème serveur
    .catch( err  => {
      // Introduction
      window.setTimeout(()=>{
        this.loaderIsRight = true;
        window.setTimeout(()=>{
          this.loaderIsClose = false;
          this.loaderIsRight = false;
        }, 300);
      }, 300);
      
      console.error(err)
    })

  }

}
