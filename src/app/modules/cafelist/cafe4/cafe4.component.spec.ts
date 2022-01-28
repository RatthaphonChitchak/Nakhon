import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cafe4Component } from './cafe4.component';

describe('Cafe4Component', () => {
  let component: Cafe4Component;
  let fixture: ComponentFixture<Cafe4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cafe4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cafe4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
