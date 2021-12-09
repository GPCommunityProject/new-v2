import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientNotesFormComponent } from './add-client-notes-form.component';

describe('AddClientNotesFormComponent', () => {
  let component: AddClientNotesFormComponent;
  let fixture: ComponentFixture<AddClientNotesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddClientNotesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClientNotesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
