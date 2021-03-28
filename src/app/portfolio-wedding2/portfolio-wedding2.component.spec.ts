import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioWedding2Component } from './portfolio-wedding2.component';

describe('PortfolioWedding2Component', () => {
  let component: PortfolioWedding2Component;
  let fixture: ComponentFixture<PortfolioWedding2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioWedding2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioWedding2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
