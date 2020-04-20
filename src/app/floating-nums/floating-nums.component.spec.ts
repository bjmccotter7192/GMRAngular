import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingNumsComponent } from './floating-nums.component';

describe('FloatingNumsComponent', () => {
  let component: FloatingNumsComponent;
  let fixture: ComponentFixture<FloatingNumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatingNumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingNumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
