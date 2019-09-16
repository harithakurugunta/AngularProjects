import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Practarray1Component } from './practarray1.component';

describe('Practarray1Component', () => {
  let component: Practarray1Component;
  let fixture: ComponentFixture<Practarray1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Practarray1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Practarray1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
