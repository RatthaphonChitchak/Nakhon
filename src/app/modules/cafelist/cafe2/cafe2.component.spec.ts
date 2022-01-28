import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cafe2Component } from './cafe2.component';

describe('Cafe2Component', () => {
  let component: Cafe2Component;
  let fixture: ComponentFixture<Cafe2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cafe2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cafe2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
