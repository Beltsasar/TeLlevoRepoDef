import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MostrarRutasDisponiblesComponent } from './mostrar-rutas-disponibles.component';

describe('MostrarRutasDisponiblesComponent', () => {
  let component: MostrarRutasDisponiblesComponent;
  let fixture: ComponentFixture<MostrarRutasDisponiblesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarRutasDisponiblesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MostrarRutasDisponiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
