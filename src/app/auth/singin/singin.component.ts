import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent {

    constructor(
        private authService: AuthService
    ) {

    }

    onSignin(form: NgForm) {
        const email    = form.value.email;
        const password = form.value.password;
        this.authService.signinUser(email, password);
    }

}
