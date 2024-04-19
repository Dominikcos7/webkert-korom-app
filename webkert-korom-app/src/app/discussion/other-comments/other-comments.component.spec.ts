import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCommentsComponent } from './other-comments.component';

describe('OtherCommentsComponent', () => {
  let component: OtherCommentsComponent;
  let fixture: ComponentFixture<OtherCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
