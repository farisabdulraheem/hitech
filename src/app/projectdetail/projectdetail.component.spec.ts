import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ProjectdetailComponent } from "./projectdetail.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ProjectdetailComponent", () => {

  let fixture: ComponentFixture<ProjectdetailComponent>;
  let component: ProjectdetailComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ProjectdetailComponent]
    });

    fixture = TestBed.createComponent(ProjectdetailComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
