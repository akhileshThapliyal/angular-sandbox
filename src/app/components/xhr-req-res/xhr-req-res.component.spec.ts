import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XhrReqResComponent } from './xhr-req-res.component';

describe('XhrReqResComponent', () => {
  let component: XhrReqResComponent;
  let fixture: ComponentFixture<XhrReqResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [XhrReqResComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(XhrReqResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
