import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgWarningComponent } from './svg-warning.component';

describe('SvgWarningComponent', () => {
  let component: SvgWarningComponent;
  let fixture: ComponentFixture<SvgWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgWarningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
