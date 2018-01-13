import { NO_ERRORS_SCHEMA } from "@angular/core";
import { PortfolioComponent } from "./portfolio.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("PortfolioComponent", () => {

  let fixture: ComponentFixture<PortfolioComponent>;
  let component: PortfolioComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [PortfolioComponent]
    });

    fixture = TestBed.createComponent(PortfolioComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
