import { Component, OnInit } from "@angular/core";
import { DogsService } from "../../services/dogs.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  data: Array<any>;
  allBreeds: any;
  constructor(private dog: DogsService) {}

  ngOnInit() {
    this.getAllBreeds();
  }
  show() {
    this.dog.getImages().subscribe((data) => {
      console.log(data);
      // this.data = data;
    });
  }

  getAllBreeds() {
    this.dog.gelAllBreeds().subscribe(
      (success: any) => {
        this.allBreeds = success.message;
      },
      (error) => console.log(error)
    );
  }
}
