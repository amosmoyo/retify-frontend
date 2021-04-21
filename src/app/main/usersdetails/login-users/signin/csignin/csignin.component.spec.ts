import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsigninComponent } from './csignin.component';

describe('CsigninComponent', () => {
  let component: CsigninComponent;
  let fixture: ComponentFixture<CsigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
