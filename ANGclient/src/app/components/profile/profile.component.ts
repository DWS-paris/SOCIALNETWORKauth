import { Component, OnInit } from '@angular/core';
import { LoaderStateModel } from '../../models/loader.state.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  // Loader
  public loaderState: LoaderStateModel = { path: `/profile`, isClose: true }
  public activeView: string = `/profile`;

  constructor() { }

  ngOnInit() {
    // Introduction
    // this.loaderState.isClose = false;
  }

  // Fonction Change View
  public changeView = (evt: any) => {
    console.log('changeView', evt)
    this.loaderState = evt;
  }

}
