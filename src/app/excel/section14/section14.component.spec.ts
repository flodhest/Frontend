import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section14Component } from './section14.component';

describe('Section14Component', () => {
  let component: Section14Component;
  let fixture: ComponentFixture<Section14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section14Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Section14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
