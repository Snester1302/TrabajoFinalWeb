import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouteReuseStrategy, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { EspecialidadService } from 'src/app/core/http/especialidad.service';
import { Especialidad } from 'src/app/shared/models/especialidad';

@Component({
  selector: 'app-especialidad-form',
  templateUrl: './especialidad-form.component.html',
  styleUrls: ['./especialidad-form.component.scss']
})
export class EspecialidadFormComponent implements OnInit {

  formGroup!: FormGroup;
  constructor(
    private especialidadService: EspecialidadService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.load();
  }

  load() {
    let especialidad: Especialidad = this.activatedRoute.snapshot.data['especialidad'];
    this.buildForm(especialidad ? especialidad : new Especialidad);
  }

  buildForm(especialidad: Especialidad) {
    this.formGroup = this.formBuilder.group({
      id: [especialidad.id, Validators.required],
      nombre: [especialidad.nombre, Validators.required],
      descripcion: [especialidad.descripcion, Validators.required],
    });
  }

  save() {
    this.especialidadService.save(this.formGroup.value).subscribe(data => {
      this.router.navigate(['admin/especialidad']);
    });
  }

  ngOnInit(): void {

  }
}



@Injectable()
export class EspecialidadFormResolve implements Resolve<Especialidad>{
  constructor(private especialidadService: EspecialidadService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Especialidad | Observable<Especialidad> | Promise<Especialidad> {
    let id = Number(route.paramMap.get('id'));
    return id ? this.especialidadService.findById(id) : new Especialidad();
  }
}