import { HttpParams } from '@angular/common/http';
import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { EspecialidadService } from 'src/app/core/http/especialidad.service';
import { Especialidad } from 'src/app/shared/models/especialidad';
import { Pagination } from 'src/app/shared/models/pagination';


@Component({
  selector: 'app-especialidad',
  templateUrl: './especialidad.component.html',
  styleUrls: ['./especialidad.component.scss']
})
export class EspecialidadComponent implements OnInit {

  pagination: Pagination<Especialidad> = this.activatedRoute.snapshot.data['pagination'];
  searchTimeOut: any;
  constructor(
    public especialidadService: EspecialidadService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  search(searchText: string) {
    clearTimeout(this.searchTimeOut);
    this.searchTimeOut = setTimeout(() => {
      this.especialidadService.pagination(1, searchText == '' ? '_' : searchText).subscribe(data => {
        this.pagination = data;
      });
    }, 1000);
  }

  changePage(page: number = 1) {
    this.especialidadService.pagination(page).subscribe(data => {
      this.pagination = data;
      this.router.navigate([], { queryParams: { page: page } });
    });
  }
}


@Injectable()
export class EspecialidadResolve implements Resolve<Pagination<Especialidad>>{
  constructor(private especialidadService: EspecialidadService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Pagination<Especialidad> | Observable<Pagination<Especialidad>> | Promise<Pagination<Especialidad>> {
    let page = route.queryParamMap.get('page');
    return this.especialidadService.pagination(page ? Number(page) : 1);
  }
}