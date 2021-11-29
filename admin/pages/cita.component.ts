import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CitaService } from 'src/app/core/http/cita.service';
import { TokenService } from 'src/app/core/services/token.service';
import { Cita } from 'src/app/shared/models/cita';
import { Pagination } from 'src/app/shared/models/pagination';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.scss']
})
export class CitaComponent implements OnInit {


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


@Injectable()
export class CitaResolve implements Resolve<Pagination<Cita>>{
  constructor(private citaService: CitaService,
    private tokenService: TokenService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Pagination<Cita> | Observable<Pagination<Cita>> | Promise<Pagination<Cita>> {
    let page = route.queryParamMap.get('page');
    return this.citaService.pagination(this.tokenService.getUsuario()!.id, page ? Number(page) : 1);
  }
}