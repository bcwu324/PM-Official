import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEndorsementComponent } from './home-endorsement.component';

describe('HomeEndorsementComponent', () => {
  let component: HomeEndorsementComponent;
  let fixture: ComponentFixture<HomeEndorsementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeEndorsementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEndorsementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
