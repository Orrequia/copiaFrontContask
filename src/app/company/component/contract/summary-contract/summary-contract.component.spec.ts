import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryContractComponent } from './summary-contract.component';

describe('SummaryContractComponent', () => {
  let component: SummaryContractComponent;
  let fixture: ComponentFixture<SummaryContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
