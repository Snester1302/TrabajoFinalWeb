import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouteReuseStrategy, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ClienteService } from 'src/app/core/http/cliente.service';
import { Cliente } from 'src/app/shared/models/cliente';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(
    private clienteService: ClienteService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.load();
  }

  load() {
    let cliente: Cliente = this.activatedRoute.snapshot.data['cliente'];
    this.buildForm(cliente ? cliente : new Cliente);
  }

  buildForm(cliente: Cliente) {
    this.formGroup = this.formBuilder.group({
      id: [cliente.id, Validators.required],
      nombre: [cliente.nombre, Validators.required],
      descripcion: [cliente.descripcion, Validators.required],
    });
  }

  save() {
    this.clienteService.save(this.formGroup.value).subscribe(data => {
      console.log(data);
      this.router.navigate(['admin/cliente']);
    });
  }

  ngOnInit(): void {

  }
}



@Injectable()
export class ClienteFormResolve implements Resolve<Cliente>{
  constructor(private clienteService: ClienteService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Cliente | Observable<Cliente> | Promise<Cliente> {
    let id = Number(route.paramMap.get('id'));
    return id ? this.clienteService.findById(id) : new Cliente();
  }
}