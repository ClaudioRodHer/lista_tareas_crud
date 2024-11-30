import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  login() {
    console.log('Iniciar sesión con:', this.username, this.password);
    // Aquí va la lógica para autenticar al usuario
  }
}
