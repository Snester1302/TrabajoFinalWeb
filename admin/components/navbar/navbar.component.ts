import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public tokenService:TokenService) { }

  ngOnInit(): void {
  }

}
