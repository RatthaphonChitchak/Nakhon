import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cafe5Component } from './cafe5.component';

describe('Cafe5Component', () => {
  let component: Cafe5Component;
  let fixture: ComponentFixture<Cafe5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cafe5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cafe5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
