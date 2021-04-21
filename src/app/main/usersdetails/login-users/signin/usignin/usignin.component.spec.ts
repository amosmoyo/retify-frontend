import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsigninComponent } from './usignin.component';

describe('UsigninComponent', () => {
  let component: UsigninComponent;
  let fixture: ComponentFixture<UsigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
