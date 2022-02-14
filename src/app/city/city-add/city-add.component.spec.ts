/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CityAddComponent } from './city-add.component';

describe('CityAddComponent', () => {
  let component: CityAddComponent;
  let fixture: ComponentFixture<CityAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
/*<app-ngx-editor
class="form-control"
id="description"
name="description"
[placeholder]="'Buraya notlarınızı giriniz'"
formControlName="description"
[spellcheck]="true"
></app-ngx-editor>*/



/*<input
            type="text"
            id="description"
            formControlName="description"
            class="form-control"
            placeholder="Notlarınız"
            autofocus
          />*/