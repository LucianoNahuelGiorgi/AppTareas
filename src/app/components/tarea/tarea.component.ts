import { Component } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent {
  faTrash = faTrash;
  faCheckCircle = faCheckCircle;
  faCircle = faCircle;

  listaTarea: Tarea[] = [];
  nombreTarea = "";

  agregarTarea() {
    // Crear objeto tarea
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }

    // Agregar objeto tarea
    this.listaTarea.push(tarea);

    //Resetear el formulario
    this.nombreTarea = "";
  }

  actualizarTarea(tarea: Tarea, index: number): void{
    this.listaTarea[index].estado = !tarea.estado;
  }

  eliminarTarea(index: number): void {
    this.listaTarea.splice(index, 1);
  }
}
