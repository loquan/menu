import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollingAngularComponent } from './scrolling-angular.component';

describe('ScrollingAngularComponent', () => {
  let component: ScrollingAngularComponent;
  let fixture: ComponentFixture<ScrollingAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollingAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollingAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
