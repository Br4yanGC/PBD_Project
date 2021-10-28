import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnesYEmbutidosComponent } from './carnes-y-embutidos.component';

describe('CarnesYEmbutidosComponent', () => {
  let component: CarnesYEmbutidosComponent;
  let fixture: ComponentFixture<CarnesYEmbutidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarnesYEmbutidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarnesYEmbutidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
