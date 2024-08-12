import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBListComponent } from './create-b-list.component';

describe('CreateBListComponent', () => {
  let component: CreateBListComponent;
  let fixture: ComponentFixture<CreateBListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateBListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
