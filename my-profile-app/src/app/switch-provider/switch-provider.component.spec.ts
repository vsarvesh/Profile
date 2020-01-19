import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchProviderComponent } from './switch-provider.component';

describe('SwitchProviderComponent', () => {
  let component: SwitchProviderComponent;
  let fixture: ComponentFixture<SwitchProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
