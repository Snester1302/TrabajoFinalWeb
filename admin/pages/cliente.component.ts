import { HttpParams } from '@angular/common/http';
import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ClienteService } from 'src/app/core/http/cliente.service';
import { Cliente } from 'src/app/shared/models/cliente';
import { Pagination } from 'src/app/shared/models/pagination';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  pagination: Pagination<Cliente> = this.activatedRoute.snapshot.data['pagination'];

  constructor(
    public clienteService: ClienteService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  changePage(page: number = 1) {
    this.clienteService.pagination(page).subscribe(data => {
      this.pagination = data;
      this.router.navigate([], { queryParams: { page: page } });
    });
  }
}


@Injectable()
export class ClienteResolve implements Resolve<Pagination<Cliente>>{
  constructor(private clienteService: ClienteService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Pagination<Cliente> | Observable<Pagination<Cliente>> | Promise<Pagination<Cliente>> {
    let page = route.queryParamMap.get('page');
    return this.clienteService.pagination(page ? Number(page) : 1);
  }
}