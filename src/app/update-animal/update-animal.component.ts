import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-update-animal',
  templateUrl: './update-animal.component.html',
  styleUrls: ['./update-animal.component.css']
})
export class UpdateAnimalComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  // updateAnimal(id, race, gender, age, description) {
  //   this.apiService.updateAnimal(id, race, gender, age, description).subscribe();
  // }
  // updateAnimal(animal) {
  //   return this.httpClient.put(this.SERVER_UPDATE_URL + animal.id, animal);
  // }
}
