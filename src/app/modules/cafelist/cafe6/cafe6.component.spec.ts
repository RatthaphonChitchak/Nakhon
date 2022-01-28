import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cafe6Component } from './cafe6.component';

describe('Cafe6Component', () => {
  let component: Cafe6Component;
  let fixture: ComponentFixture<Cafe6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cafe6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cafe6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
