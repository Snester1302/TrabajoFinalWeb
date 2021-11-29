import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  menu: boolean = false;

  location: string = '';
  ngOnInit(): void {
  }

  constructor(public router: Router) {
    // router.url.replace('/', '').split('/').map(item=>{
    //   this.location=
    // });
    // this.location = 
  }

  actionMenu() {
    this.menu = !this.menu;
  }
}
