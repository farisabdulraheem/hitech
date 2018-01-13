import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ImageComponent } from "./image.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ImageComponent", () => {

  let fixture: ComponentFixture<ImageComponent>;
  let component: ImageComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ImageComponent]
    });

    fixture = TestBed.createComponent(ImageComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
