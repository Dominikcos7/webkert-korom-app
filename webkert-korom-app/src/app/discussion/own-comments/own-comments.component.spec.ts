import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnCommentsComponent } from './own-comments.component';

describe('OwnCommentsComponent', () => {
  let component: OwnCommentsComponent;
  let fixture: ComponentFixture<OwnCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
