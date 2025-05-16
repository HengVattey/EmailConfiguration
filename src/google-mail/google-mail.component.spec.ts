import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMailComponent } from './google-mail.component';

describe('GoogleMailComponent', () => {
  let component: GoogleMailComponent;
  let fixture: ComponentFixture<GoogleMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleMailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
