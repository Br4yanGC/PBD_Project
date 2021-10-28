import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AseoYLimpiezaComponent } from './aseo-y-limpieza.component';

describe('AseoYLimpiezaComponent', () => {
  let component: AseoYLimpiezaComponent;
  let fixture: ComponentFixture<AseoYLimpiezaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AseoYLimpiezaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AseoYLimpiezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
