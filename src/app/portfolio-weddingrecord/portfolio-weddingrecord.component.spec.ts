import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioWeddingrecordComponent } from './portfolio-weddingrecord.component';

describe('PortfolioWeddingrecordComponent', () => {
  let component: PortfolioWeddingrecordComponent;
  let fixture: ComponentFixture<PortfolioWeddingrecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioWeddingrecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioWeddingrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
