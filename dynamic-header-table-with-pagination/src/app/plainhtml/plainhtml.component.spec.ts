import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlainhtmlComponent } from './plainhtml.component';

describe('PlainhtmlComponent', () => {
  let component: PlainhtmlComponent;
  let fixture: ComponentFixture<PlainhtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlainhtmlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlainhtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
