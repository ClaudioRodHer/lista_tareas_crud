import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  standalone: true
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  register() {
    if (this.password === this.confirmPassword) {
      console.log('Registrando usuario:', this.username);
      // Aquí va la lógica para registrar al usuario
    } else {
      console.error('Las contraseñas no coinciden.');
    }
  }
}
