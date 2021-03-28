import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioNewBornComponent } from './portfolio-new-born.component';

describe('PortfolioNewBornComponent', () => {
  let component: PortfolioNewBornComponent;
  let fixture: ComponentFixture<PortfolioNewBornComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioNewBornComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioNewBornComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
