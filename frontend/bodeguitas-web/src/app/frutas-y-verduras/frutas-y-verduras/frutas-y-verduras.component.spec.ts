import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrutasYVerdurasComponent } from './frutas-y-verduras.component';

describe('FrutasYVerdurasComponent', () => {
  let component: FrutasYVerdurasComponent;
  let fixture: ComponentFixture<FrutasYVerdurasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrutasYVerdurasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrutasYVerdurasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
