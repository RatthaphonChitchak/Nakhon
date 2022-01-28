import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cafe10Component } from './cafe10.component';

describe('Cafe10Component', () => {
  let component: Cafe10Component;
  let fixture: ComponentFixture<Cafe10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cafe10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cafe10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
