import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultProviderComponent } from './default-provider.component';

describe('DefaultProviderComponent', () => {
  let component: DefaultProviderComponent;
  let fixture: ComponentFixture<DefaultProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
