import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MostrarPosiblesPasajerosComponent } from './mostrar-posibles-pasajeros.component';

describe('MostrarPosiblesPasajerosComponent', () => {
  let component: MostrarPosiblesPasajerosComponent;
  let fixture: ComponentFixture<MostrarPosiblesPasajerosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarPosiblesPasajerosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MostrarPosiblesPasajerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
