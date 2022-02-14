/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CityDetail2Component } from './city-detail2.component';

describe('CityDetail2Component', () => {
  let component: CityDetail2Component;
  let fixture: ComponentFixture<CityDetail2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityDetail2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityDetail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
