import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/core/http/usuario.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
  ) {
    this.formGroup = formBuilder.group({
      id: [0, Validators.required],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', Validators.required],
      id_tipo_documento: ['', Validators.required],
      nro_documento: ['', Validators.required],
      id_tipo_usuario: [2, Validators.required],
      contrasena: ['', Validators.required],
      confirm_contrasena: ['', Validators.required],
      terminos01: [false, Validators.requiredTrue],
      terminos02: [false, Validators.requiredTrue],
    });
  }

  ngOnInit(): void {
  }
  signup() {
    this.usuarioService.save(this.formatValue()).subscribe(data => {
      this.router.navigate(['auth']);
    });
  }


  formatValue() {
    this.formGroup.value.id_tipo_documento = Number(this.formGroup.value.id_tipo_documento);
    return this.formGroup.value;
  }




}
