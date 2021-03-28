import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioArtComponent } from './portfolio-art.component';

describe('PortfolioArtComponent', () => {
  let component: PortfolioArtComponent;
  let fixture: ComponentFixture<PortfolioArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioArtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
