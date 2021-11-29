import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CitaService } from 'src/app/core/http/cita.service';
import { TokenService } from 'src/app/core/services/token.service';
import { Cita } from 'src/app/shared/models/cita';
import { Pagination } from 'src/app/shared/models/pagination';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  pagination: Pagination<Cita> = this.activatedRoute.snapshot.data['pagination'];
  searchTimeOut: any;
  constructor(
    public citaService: CitaService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tokenService: TokenService) {
  }

  ngOnInit(): void {
  }

  search(searchText: string) {
    clearTimeout(this.searchTimeOut);
    this.searchTimeOut = setTimeout(() => {
      this.citaService.pagination(this.tokenService.getUsuario()!.id, 1, searchText == '' ? '_' : searchText).subscribe(data => {
        this.pagination = data;
      });
    }, 1000);
  }

  changePage(page: number = 1) {
    this.citaService.pagination(this.tokenService.getUsuario()!.id, page).subscribe(data => {
      this.pagination = data;
      this.router.navigate([], { queryParams: { page: page } });
    });
  }
}