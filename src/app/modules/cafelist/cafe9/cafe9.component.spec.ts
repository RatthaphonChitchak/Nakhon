import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cafe9Component } from './cafe9.component';

describe('Cafe9Component', () => {
  let component: Cafe9Component;
  let fixture: ComponentFixture<Cafe9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cafe9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cafe9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
