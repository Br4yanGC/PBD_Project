import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViveresComponent } from './viveres.component';

describe('ViveresComponent', () => {
  let component: ViveresComponent;
  let fixture: ComponentFixture<ViveresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViveresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViveresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
