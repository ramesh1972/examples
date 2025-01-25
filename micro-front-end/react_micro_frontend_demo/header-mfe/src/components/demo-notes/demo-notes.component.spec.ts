import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoNotesComponent } from './demo-notes.component';

describe('DemoNotesComponent', () => {
  let component: DemoNotesComponent;
  let fixture: ComponentFixture<DemoNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoNotesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
