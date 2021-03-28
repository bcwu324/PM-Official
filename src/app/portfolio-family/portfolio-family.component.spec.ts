import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioFamilyComponent } from './portfolio-family.component';

describe('PortfolioFamilyComponent', () => {
  let component: PortfolioFamilyComponent;
  let fixture: ComponentFixture<PortfolioFamilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioFamilyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
