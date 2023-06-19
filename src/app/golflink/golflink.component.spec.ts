import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GolflinkComponent } from './golflink.component';

describe('GolflinkComponent', () => {
  let component: GolflinkComponent;
  let fixture: ComponentFixture<GolflinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GolflinkComponent]
    });
    fixture = TestBed.createComponent(GolflinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
