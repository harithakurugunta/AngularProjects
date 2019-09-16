import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Json1Component } from './json1.component';

describe('Json1Component', () => {
  let component: Json1Component;
  let fixture: ComponentFixture<Json1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Json1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Json1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
