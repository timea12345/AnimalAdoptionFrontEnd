import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-shelter',
  templateUrl: './add-shelter.component.html',
  styleUrls: ['./add-shelter.component.css']
})
export class AddShelterComponent implements OnInit {
  shelter: FormGroup;

  constructor(private apiService: ApiService, private builder: FormBuilder) { }

  ngOnInit(): void {
    this.shelter = this.builder.group({
      name: [''],
      address: ['']
    });
  }

  addShelter() {
    this.apiService.addShelter(this.shelter.value).subscribe();
  }

}
