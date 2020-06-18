import { Component, OnInit } from '@angular/core';
import { DogsService } from '../../services/dogs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:Array<any>
  constructor(private dog:DogsService) { }

  ngOnInit() {
  }
  show(){
    this.dog.getImages().subscribe((data) => {
      this.data = data;
      console.log(data)
    })
  }
}
