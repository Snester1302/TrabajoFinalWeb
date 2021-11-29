import { HttpParams } from '@angular/common/http';
import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { EspecialistaService } from 'src/app/core/http/especialista.service';
import { Especialista } from 'src/app/shared/models/especialista';
import { Pagination } from 'src/app/shared/models/pagination';


@Component({
  selector: 'app-especialista',
  templateUrl: './especialista.component.html',
  styleUrls: ['./especialista.component.scss']
})
export class EspecialistaComponent implements OnInit {

  pagination: Pagination<Especialista> = this.activatedRoute.snapshot.data['pagination'];
  searchTimeOut: any;
  constructor(
    public especialistaService: EspecialistaService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  search(searchText: string) {
    clearTimeout(this.searchTimeOut);
    this.searchTimeOut = setTimeout(() => {
      this.especialistaService.pagination(1, searchText == '' ? '_' : searchText).subscribe(data => {
        this.pagination = data;
      });
    }, 1000);
  }

  changePage(page: number = 1) {
    this.especialistaService.pagination(page).subscribe(data => {
      this.pagination = data;
      this.router.navigate([], { queryParams: { page: page } });
    });
  }
}


@Injectable()
export class EspecialistaResolve implements Resolve<Pagination<Especialista>>{
  constructor(private especialistaService: EspecialistaService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Pagination<Especialista> | Observable<Pagination<Especialista>> | Promise<Pagination<Especialista>> {
    let page = route.queryParamMap.get('page');
    return this.especialistaService.pagination(page ? Number(page) : 1);
  }
}