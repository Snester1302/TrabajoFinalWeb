import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouteReuseStrategy, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SucursalService } from 'src/app/core/http/sucursal.service';
import { Sucursal } from 'src/app/shared/models/sucursal';

@Component({
  selector: 'app-sucursal-form',
  templateUrl: './sucursal-form.component.html',
  styleUrls: ['./sucursal-form.component.scss']
})
export class SucursalFormComponent implements OnInit {

  formGroup!: FormGroup;
  constructor(
    private sucursalService: SucursalService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.load();
  }

  load() {
    let sucursal: Sucursal = this.activatedRoute.snapshot.data['sucursal'];
    this.buildForm(sucursal ? sucursal : new Sucursal);
  }

  buildForm(sucursal: Sucursal) {
    this.formGroup = this.formBuilder.group({
      id: [sucursal.id, Validators.required],
      nombre: [sucursal.nombre, Validators.required],
      direccion: [sucursal.direccion, Validators.required],
      distrito: [sucursal.distrito, Validators.required],
    });
  }

  save() {
    this.sucursalService.save(this.formGroup.value).subscribe(data => {
      this.router.navigate(['admin/sucursal']);
    });
  }

  ngOnInit(): void {

  }
}



@Injectable()
export class SucursalFormResolve implements Resolve<Sucursal>{
  constructor(private sucursalService: SucursalService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Sucursal | Observable<Sucursal> | Promise<Sucursal> {
    let id = Number(route.paramMap.get('id'));
    return id ? this.sucursalService.findById(id) : new Sucursal();
  }
}