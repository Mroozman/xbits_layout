import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompetitionButtonComponent } from './add-competition-button.component';

describe('AddCompetitionButtonComponent', () => {
  let component: AddCompetitionButtonComponent;
  let fixture: ComponentFixture<AddCompetitionButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCompetitionButtonComponent]
    });
    fixture = TestBed.createComponent(AddCompetitionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
