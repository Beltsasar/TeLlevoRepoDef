import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mostrar-posibles-conductores',
  templateUrl: './mostrar-posibles-conductores.component.html',
  styleUrls: ['./mostrar-posibles-conductores.component.scss'],
})
export class MostrarPosiblesConductoresComponent  implements OnInit {
  ngOnInit(): void {
    
    
  }

  nombreConductor = 'Juan Pérez';
  rutConductor = '12.345.678-9';
  sedeConductor = 'Santiago';

  constructor(private router: Router) {}

  verDetalles() {
    this.router.navigate(['/detalles-conductor', this.nombreConductor, this.rutConductor, this.sedeConductor]);
  }
}
