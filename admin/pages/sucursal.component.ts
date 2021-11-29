import { HttpParams } from '@angular/common/http';
import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SucursalService } from 'src/app/core/http/sucursal.service';
import { Sucursal } from 'src/app/shared/models/sucursal';
import { Pagination } from 'src/app/shared/models/pagination';


@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.scss']
})
export class SucursalComponent implements OnInit {

  pagination: Pagination<Sucursal> = this.activatedRoute.snapshot.data['pagination'];
  searchTimeOut: any;

  constructor(
    public sucursalService: SucursalService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  search(searchText: string) {
    clearTimeout(this.searchTimeOut);
    this.searchTimeOut = setTimeout(() => {
      this.sucursalService.pagination(1, searchText == '' ? '_' : searchText).subscribe(data => {
        this.pagination = data;
      });
    }, 1000);
  }



  changePage(page: number = 1) {
    this.sucursalService.pagination(page).subscribe(data => {
      this.pagination = data;
      this.router.navigate([], { queryParams: { page: page } });
    });
  }
}


@Injectable()
export class SucursalResolve implements Resolve<Pagination<Sucursal>>{
  constructor(private sucursalService: SucursalService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Pagination<Sucursal> | Observable<Pagination<Sucursal>> | Promise<Pagination<Sucursal>> {
    let page = route.queryParamMap.get('page');
    return this.sucursalService.pagination(page ? Number(page) : 1);
  }
}