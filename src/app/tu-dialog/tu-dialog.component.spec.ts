import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuDialogComponent } from './tu-dialog.component';

describe('TuDialogComponent', () => {
  let component: TuDialogComponent;
  let fixture: ComponentFixture<TuDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TuDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TuDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
