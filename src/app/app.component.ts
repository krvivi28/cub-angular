import { Component, inject, OnInit } from "@angular/core";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";
import { AppService } from "./app.service";
import { Component2Component } from "./components/component2/component2.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule,FormsModule,Component2Component],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  providers:[AppService]
})
export class AppComponent implements OnInit {
  title = "my-app";
  name: any = new FormControl("vivek");
  public service = inject(AppService);

  ngOnInit(): void {
    // this.service.call();
  }

  handleChange() {
    console.log(this.name.value);
  }
}
