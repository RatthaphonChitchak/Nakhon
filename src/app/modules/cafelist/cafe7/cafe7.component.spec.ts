import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cafe7Component } from './cafe7.component';

describe('Cafe7Component', () => {
  let component: Cafe7Component;
  let fixture: ComponentFixture<Cafe7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cafe7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cafe7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
