import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipatnsComponent } from './participatns.component';

describe('ParticipatnsComponent', () => {
  let component: ParticipatnsComponent;
  let fixture: ComponentFixture<ParticipatnsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParticipatnsComponent]
    });
    fixture = TestBed.createComponent(ParticipatnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
