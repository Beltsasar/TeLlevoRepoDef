import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MostrarDestinoOfrecidoComponent } from './mostrar-destino-ofrecido.component';

describe('MostrarDestinoOfrecidoComponent', () => {
  let component: MostrarDestinoOfrecidoComponent;
  let fixture: ComponentFixture<MostrarDestinoOfrecidoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarDestinoOfrecidoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MostrarDestinoOfrecidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
