import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MostrarRutaOfrecidaComponent } from './mostrar-ruta-ofrecida.component';

describe('MostrarRutaOfrecidaComponent', () => {
  let component: MostrarRutaOfrecidaComponent;
  let fixture: ComponentFixture<MostrarRutaOfrecidaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarRutaOfrecidaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MostrarRutaOfrecidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
