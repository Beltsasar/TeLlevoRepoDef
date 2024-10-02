import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MostrarPosiblesConductoresComponent } from './mostrar-posibles-conductores.component';

describe('MostrarPosiblesConductoresComponent', () => {
  let component: MostrarPosiblesConductoresComponent;
  let fixture: ComponentFixture<MostrarPosiblesConductoresComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarPosiblesConductoresComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MostrarPosiblesConductoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
