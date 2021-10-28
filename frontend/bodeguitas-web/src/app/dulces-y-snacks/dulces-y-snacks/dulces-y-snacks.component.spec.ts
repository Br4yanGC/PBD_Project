import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DulcesYSnacksComponent } from './dulces-y-snacks.component';

describe('DulcesYSnacksComponent', () => {
  let component: DulcesYSnacksComponent;
  let fixture: ComponentFixture<DulcesYSnacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DulcesYSnacksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DulcesYSnacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
