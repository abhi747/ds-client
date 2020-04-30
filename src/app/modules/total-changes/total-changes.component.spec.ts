import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalChangesComponent } from './total-changes.component';

describe('TotalChangesComponent', () => {
  let component: TotalChangesComponent;
  let fixture: ComponentFixture<TotalChangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalChangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
