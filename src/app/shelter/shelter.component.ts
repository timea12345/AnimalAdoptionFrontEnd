import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-shelter',
  templateUrl: './shelter.component.html',
  styleUrls: ['./shelter.component.css']
})
export class ShelterComponent implements OnInit {

  shelters = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getShelters().subscribe((data: any[]) => {
      this.shelters = data;
    });
  }

}
