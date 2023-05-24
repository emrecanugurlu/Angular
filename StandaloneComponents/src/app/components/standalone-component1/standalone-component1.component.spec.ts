import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneComponent1Component } from './standalone-component1.component';

describe('StandaloneComponent1Component', () => {
  let component: StandaloneComponent1Component;
  let fixture: ComponentFixture<StandaloneComponent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandaloneComponent1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandaloneComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
