import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CitaService } from 'src/app/core/http/cita.service';
import { EspecialistaService } from 'src/app/core/http/especialista.service';
import { TokenService } from 'src/app/core/services/token.service';
import { Cita } from 'src/app/shared/models/cita';
import { CitaLoad } from 'src/app/shared/models/cita-load';
import { Especialidad } from 'src/app/shared/models/especialidad';
import { Especialista } from 'src/app/shared/models/especialista';
import { Filter } from 'src/app/shared/models/filter';
import { Horario } from 'src/app/shared/models/horario';
import { Pagination } from 'src/app/shared/models/pagination';
import { Sucursal } from 'src/app/shared/models/sucursal';

@Component({
  selector: 'app-cita-form',
  templateUrl: './cita-form.component.html',
  styleUrls: ['./cita-form.component.scss']
})
export class CitaFormComponent implements OnInit {
  formGroup!: FormGroup;
  active: string = 'begin';

  _especialidades: Especialidad[] = [];
  _sucursales: Sucursal[] = [];
  _pagination: Pagination<Especialista> = new Pagination<Especialista>();

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private especialistaService: EspecialistaService,
    private citaService: CitaService,
    private router: Router,
    public tokenService: TokenService) {

    let load = this.activatedRoute.snapshot.data['load'];
    this._especialidades = load.especialidades;
    this._sucursales = load.sucursales;

    this.buildForm(new Cita);
  }

  get beginValid() {
    return this.formGroup.get('para')!.valid && this.formGroup.get('id_especialidad')!.valid && this.formGroup.get('id_sucursal')!.valid;
  }

  loadPagination(page: number = 1) {
    var id_especialidad = this.formGroup.get('id_especialidad')!.value;
    var id_sucursal = this.formGroup.get('id_sucursal')!.value;
    var fecha = this.formGroup.get('fecha')!.value;

    var filter: Filter = {
      page: page,
      id_especialidad: Number(id_especialidad),
      id_sucursal: Number(id_sucursal),
      fecha: fecha,
      numItems: 10
    };

    this.especialistaService.filter(filter).subscribe(data => {
      this._pagination = data;
      this.active = 'filter';
    });
  }

  _especialista: Especialista = new Especialista;
  _horario: Horario = new Horario;
  finish(item: Especialista, horario: Horario) {
    this._especialista = item;
    this._horario = horario;
    this.formGroup.get('id_especialista')?.setValue(item.id);
    this.formGroup.get('id_horario')?.setValue(horario.id);
    this.active = 'finish';
  }

  ngOnInit(): void {
  }

  buildForm(cita: Cita) {
    this.formGroup = this.formBuilder.group({
      id: [cita.id, Validators.required],
      id_usuario: [this.tokenService.getUsuario()!.id, [Validators.required, Validators.min(1)]],
      id_sucursal: [cita.id_sucursal, [Validators.required, Validators.min(1)]],
      id_especialidad: [cita.id_especialidad, [Validators.required, Validators.min(1)]],
      id_especialista: [cita.id_especialista, [Validators.required, Validators.min(1)]],
      id_horario: [cita.id_horario, [Validators.required, Validators.min(1)]],
      fecha: [cita.fecha, Validators.required],
      para: [this.tokenService.getUsuario()!.nombres + ', ' + this.tokenService.getUsuario()!.apellidos, Validators.required],
    });
  }

  formatValue() {
    this.formGroup.value.id_usuario = Number(this.formGroup.value.id_usuario);
    this.formGroup.value.id_sucursal = Number(this.formGroup.value.id_sucursal);
    this.formGroup.value.id_especialidad = Number(this.formGroup.value.id_especialidad);
    this.formGroup.value.id_especialista = Number(this.formGroup.value.id_especialista);
    this.formGroup.value.id_horario = Number(this.formGroup.value.id_horario);
    return this.formGroup.value;
  }

  save() {
    console.log(this.formatValue());
    this.citaService.save(this.formatValue()).subscribe(data => {
      this.router.navigate(['admin/cita']);
    });
  }



}




@Injectable()
export class CitaFormResolve implements Resolve<CitaLoad>{
  constructor(private citaService: CitaService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): CitaLoad | Observable<CitaLoad> | Promise<CitaLoad> {
    return this.citaService.load();
  }
}
