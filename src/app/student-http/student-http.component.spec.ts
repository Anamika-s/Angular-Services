import { ComponentFixture, TestBed } from "@angular/core/testing";

import { StudentHttpComponent } from "./student-http.component";

describe("StudentHttpComponent", () => {
  let component: StudentHttpComponent;
  let fixture: ComponentFixture<StudentHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
