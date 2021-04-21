import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupNormalusersComponent } from './signup-normalusers.component';

describe('SignupNormalusersComponent', () => {
  let component: SignupNormalusersComponent;
  let fixture: ComponentFixture<SignupNormalusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupNormalusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupNormalusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
