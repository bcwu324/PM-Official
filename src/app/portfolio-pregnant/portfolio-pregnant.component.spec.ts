import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioPregnantComponent } from './portfolio-pregnant.component';

describe('PortfolioPregnantComponent', () => {
  let component: PortfolioPregnantComponent;
  let fixture: ComponentFixture<PortfolioPregnantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioPregnantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioPregnantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
