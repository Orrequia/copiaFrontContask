import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProvinceComponent } from './show-province.component';

describe('ShowProvinceComponent', () => {
  let component: ShowProvinceComponent;
  let fixture: ComponentFixture<ShowProvinceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowProvinceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProvinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
