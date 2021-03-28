import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioWeddingComponent } from './portfolio-wedding.component';

describe('PortfolioWeddingComponent', () => {
  let component: PortfolioWeddingComponent;
  let fixture: ComponentFixture<PortfolioWeddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioWeddingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioWeddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
