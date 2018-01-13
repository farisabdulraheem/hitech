import { NO_ERRORS_SCHEMA } from "@angular/core";
import { TestimonialComponent } from "./testimonial.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("TestimonialComponent", () => {

  let fixture: ComponentFixture<TestimonialComponent>;
  let component: TestimonialComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [TestimonialComponent]
    });

    fixture = TestBed.createComponent(TestimonialComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
