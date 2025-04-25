import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraBuscComponent } from './barra-busc.component';

describe('BarraBuscComponent', () => {
  let component: BarraBuscComponent;
  let fixture: ComponentFixture<BarraBuscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraBuscComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraBuscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
