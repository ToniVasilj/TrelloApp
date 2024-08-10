import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBoardNameComponent } from './update-board-name.component';

describe('UpdateBoardNameComponent', () => {
  let component: UpdateBoardNameComponent;
  let fixture: ComponentFixture<UpdateBoardNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateBoardNameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBoardNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
