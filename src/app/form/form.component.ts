import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  animalForm: FormGroup;

  constructor(private apiService: ApiService, private builder: FormBuilder) { }

  ngOnInit(): void {
    this.animalForm = this.builder.group({
      race: [''],
      sex: [''],
      age: [''],
      description: ['']
    });
  }

  addAnimal() {
    this.apiService.populateAnimal(this.animalForm.value).subscribe();
  }
}
