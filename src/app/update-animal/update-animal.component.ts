import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-update-animal',
  templateUrl: './update-animal.component.html',
  styleUrls: ['./update-animal.component.css']
})
export class UpdateAnimalComponent implements OnInit {

  animalUp: FormGroup;


  constructor(private apiService: ApiService, private builder: FormBuilder) { }

  ngOnInit() {
    this.animalUp = this.builder.group({
      race: [''],
      sex: [''],
      age: [''],
      description: ['']
    });
  }

  updateAnimal() {
    this.apiService.updateAnimal(this.animalUp.value).subscribe();
  }
}
