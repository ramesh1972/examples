import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMFEComponent } from './about-mfe.component';

describe('AboutMFEComponent', () => {
  let component: AboutMFEComponent;
  let fixture: ComponentFixture<AboutMFEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMFEComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMFEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
