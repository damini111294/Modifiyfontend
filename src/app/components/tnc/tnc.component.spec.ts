import { ComponentFixture, TestBed } from '@angular/core/testing';
import { tncComponent } from './tnc.component';


describe('tncComponent' , () => {
  let component: tncComponent;
  let fixture: ComponentFixture<tncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ tncComponent ]
    })
    .compileComponents();
  });

  
  beforeEach(() => {
    fixture = TestBed.createComponent(tncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
