import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombre: string = '';
  email: string = '';

  isFormValid(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return this.nombre.trim() !== '' && emailRegex.test(this.email);
  }

  onSubmit() {
    if (window.confirm('¿Estás seguro de enviar el formulario?')) {
      const data = {
        nombre: this.nombre,
        email: this.email
      };
      
      this.nuevaVentana(data);
    }
  }

  nuevaVentana(data: any) {
    const nuevo = window.open('', '_blank') ?? window;
    nuevo.document.title = 'Ingreso Correcto';
    nuevo.document.body.innerHTML = `
      <h1>Datos del formulario</h1>
      <p>Nombre: ${data.nombre}</p>
      <p>Email: ${data.email}</p>
    `;
  }
}
 