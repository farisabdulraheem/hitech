import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ProjectComponent } from "./project.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ProjectComponent", () => {

  let fixture: ComponentFixture<ProjectComponent>;
  let component: ProjectComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ProjectComponent]
    });

    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
