import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MozillaThunderbirdComponent } from './mozilla-thunderbird.component';

describe('MozillaThunderbirdComponent', () => {
  let component: MozillaThunderbirdComponent;
  let fixture: ComponentFixture<MozillaThunderbirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MozillaThunderbirdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MozillaThunderbirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
