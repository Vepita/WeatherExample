import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploClimaComponent } from './ejemplo-clima.component';

describe('EjemploClimaComponent', () => {
  let component: EjemploClimaComponent;
  let fixture: ComponentFixture<EjemploClimaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjemploClimaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploClimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
