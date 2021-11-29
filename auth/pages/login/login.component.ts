import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReCaptcha2Component } from 'ngx-captcha';
import { UsuarioService } from 'src/app/core/http/usuario.service';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('captchaElem') captchaElem!: ReCaptcha2Component;

  formGroup!: FormGroup;

  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    private formBuilder: FormBuilder,
    private tokenService: TokenService) {

    this.formGroup = formBuilder.group({
      email: ['', Validators.required],
      contrasena: ['', Validators.required],
      captcha: ['', Validators.required],
    });

  }
  ngOnInit(): void {
  }

  login() {
    this.usuarioService.login(this.formGroup.value).subscribe(data => {
      this.tokenService.setUsuario(data);
      if (data.id_tipo_usuario == 1)
        this.router.navigate(['admin/sucursal']);
      else
        this.router.navigate(['admin']);
    }, err => {
      this.formGroup.reset();
      this.captchaElem.resetCaptcha();
    });
  }
}
