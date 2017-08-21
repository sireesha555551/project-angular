import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgformsComponent } from './ngforms.component';

describe('NgformsComponent', () => {
  let component: NgformsComponent;
  let fixture: ComponentFixture<NgformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
