import { Component, Injectable, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouteReuseStrategy, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { EspecialistaService } from 'src/app/core/http/especialista.service';
import { HorarioService } from 'src/app/core/http/horario.service';
import { Especialidad } from 'src/app/shared/models/especialidad';
import { Especialista } from 'src/app/shared/models/especialista';
import { EspecialistaLoad } from 'src/app/shared/models/especialista-load';
import { Horario } from 'src/app/shared/models/horario';
import { Sucursal } from 'src/app/shared/models/sucursal';

@Component({
  selector: 'app-especialista-form',
  templateUrl: './especialista-form.component.html',
  styleUrls: ['./especialista-form.component.scss']
})
export class EspecialistaFormComponent implements OnInit {

  formGroup!: FormGroup;
  formArray: FormArray = this.formBuilder.array([]);

  especialidades: Especialidad[] = [];
  sucursales: Sucursal[] = [];

  constructor(
    private especialistaService: EspecialistaService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private horarioService: HorarioService
  ) {
    this.load();
  }

  parseFormGroup(abstractControl: AbstractControl) {
    return abstractControl as FormGroup;
  }

  load() {
    let especialistaLoad: EspecialistaLoad = this.activatedRoute.snapshot.data['load'];
    this.especialidades = especialistaLoad.especialidades;
    this.sucursales = especialistaLoad.sucursales;
    this.buildForm(especialistaLoad.especialista != null ? especialistaLoad.especialista : new Especialista);
  }

  formatValue() {
    this.formGroup.value.id_sucursal = Number(this.formGroup.value.id_sucursal);
    this.formGroup.value.id_especialidad = Number(this.formGroup.value.id_especialidad);
    return this.formGroup.value;
  }

  buildForm(especialista: Especialista) {
    this.formGroup = this.formBuilder.group({
      id: [especialista.id, Validators.required],
      nombres: [especialista.nombres, Validators.required],
      apellidos: [especialista.apellidos, Validators.required],
      dni: [especialista.dni, Validators.required],
      id_especialidad: [especialista.id_especialidad, [Validators.required, Validators.min(1)]],
      id_sucursal: [especialista.id_sucursal, [Validators.required, Validators.min(1)]],
      horarios: this.formBuilder.array([])
    });

    especialista.horarios.forEach(item => {
      this.agregarHorario(item);
    });
  }

  get horarios(): FormArray {
    return this.formGroup.get('horarios') as FormArray;

  }

  agregarHorario(horario: Horario = new Horario) {
    this.horarios.push(this.formBuilder.group({
      id: [horario.id, Validators.required],
      inicio: [horario.inicio, Validators.required],
      fin: [horario.fin, Validators.required],
      estado: [horario.estado, Validators.required],
    }));
  }

  eliminarHorario(i: number, abstractControl: AbstractControl) {
    let id = abstractControl.get('id')?.value;
    if (id != 0 && id != null && id != undefined)
      this.horarioService.deleteById(id).subscribe(() => this.horarios.removeAt(i));
    else
      this.horarios.removeAt(i);
  }

  save() {
    this.especialistaService.save(this.formatValue()).subscribe(data => {
      this.router.navigate(['admin/especialista']);
    });
  }

  ngOnInit(): void {
  }
}



@Injectable()
export class EspecialistaFormResolve implements Resolve<EspecialistaLoad>{
  constructor(private especialistaService: EspecialistaService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): EspecialistaLoad | Observable<EspecialistaLoad> | Promise<EspecialistaLoad> {
    let id = Number(route.paramMap.get('id'));
    return this.especialistaService.load(id ? id : 0);
  }
}