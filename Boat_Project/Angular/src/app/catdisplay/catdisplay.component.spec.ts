import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatdisplayComponent } from './catdisplay.component';

describe('CatdisplayComponent', () => {
  let component: CatdisplayComponent;
  let fixture: ComponentFixture<CatdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatdisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
