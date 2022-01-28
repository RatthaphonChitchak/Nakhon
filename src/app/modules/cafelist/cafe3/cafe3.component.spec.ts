import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cafe3Component } from './cafe3.component';

describe('Cafe3Component', () => {
  let component: Cafe3Component;
  let fixture: ComponentFixture<Cafe3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cafe3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cafe3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
