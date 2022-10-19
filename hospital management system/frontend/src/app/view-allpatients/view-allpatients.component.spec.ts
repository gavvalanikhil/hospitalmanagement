import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllpatientsComponent } from './view-allpatients.component';

describe('ViewAllpatientsComponent', () => {
  let component: ViewAllpatientsComponent;
  let fixture: ComponentFixture<ViewAllpatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllpatientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllpatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
