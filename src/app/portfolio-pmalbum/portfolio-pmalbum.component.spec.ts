import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioPmalbumComponent } from './portfolio-pmalbum.component';

describe('PortfolioPmalbumComponent', () => {
  let component: PortfolioPmalbumComponent;
  let fixture: ComponentFixture<PortfolioPmalbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioPmalbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioPmalbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
