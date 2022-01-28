import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cafe1Component } from './cafe1.component';

describe('Cafe1Component', () => {
  let component: Cafe1Component;
  let fixture: ComponentFixture<Cafe1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cafe1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cafe1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
