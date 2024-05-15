import { ComponentFixture, TestBed } from '@angular/core/testing';

import { referandearnComponent } from './referandearn.component';

describe('AddchapterComponent', () => {
  let component: referandearnComponent;
  let fixture: ComponentFixture<referandearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ referandearnComponent ]
    })
    .compileComponents();
  });

  
  beforeEach(() => {
    fixture = TestBed.createComponent(referandearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
