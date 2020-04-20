import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleInputsComponent } from './toggle-inputs.component';

describe('ToggleInputsComponent', () => {
  let component: ToggleInputsComponent;
  let fixture: ComponentFixture<ToggleInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
