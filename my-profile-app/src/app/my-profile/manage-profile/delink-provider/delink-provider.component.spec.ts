import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelinkProviderComponent } from './delink-provider.component';

describe('DelinkProviderComponent', () => {
  let component: DelinkProviderComponent;
  let fixture: ComponentFixture<DelinkProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelinkProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelinkProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
