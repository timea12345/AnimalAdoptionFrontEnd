import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  animals = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getAnimals().subscribe((data: any[]) => {
      this.animals = data;
    });
  }

  adoptAnimal(id) {
    this.apiService.adoptAnimal(id).subscribe();
  }

  deleteAnimal(id) {
    this.apiService.deleteAnimal(id).subscribe();
  }

  updateAnimal(animal) {
    this.apiService.updateAnimal(animal).subscribe();
  }
}
