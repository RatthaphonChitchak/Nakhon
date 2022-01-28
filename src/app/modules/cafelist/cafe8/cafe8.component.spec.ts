import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cafe8Component } from './cafe8.component';

describe('Cafe8Component', () => {
  let component: Cafe8Component;
  let fixture: ComponentFixture<Cafe8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cafe8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cafe8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
