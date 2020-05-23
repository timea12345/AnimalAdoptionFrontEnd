import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL = 'http://localhost:8080/animal/findAll/';
  private SERVER_FIND_URL = 'http://localhost:8080/animal/findById';
  private SERVER_POST_URL = 'http://localhost:8080/adoption/createAdoption/';
  private SERVER_ADD_ANIMAL_URL = 'http://localhost:8080/animal/addAnimal';
  private SERVER_DELETE_ANIMAL_URL = 'http://localhost:8080/animal/delete/';
  private SERVER_UPDATE_URL = 'http://localhost:8080/animal/update/';
  private SERVER_ADD_SHELTER_URL = 'http://localhost:8080/shelter/addShelter/';
  private SERVER_SHELTERS_URL = 'http://localhost:8080/shelter/list/';

  constructor(private httpClient: HttpClient) { }

  public getAnimals() {
      return this.httpClient.get(this.SERVER_URL);
  }

  public getAnimal(id) {
    return this.httpClient.get(this.SERVER_FIND_URL + id);
  }

  adoptAnimal(id) {
    return this.httpClient.post(this.SERVER_POST_URL + '?idUser=1' + '&idAnimal=' + id, null);
  }

  populateAnimal(animal) {
    const body = JSON.stringify(animal);
    console.log(body);
    return this.httpClient.post
    (this.SERVER_ADD_ANIMAL_URL, body, httpOptions);
  }

  addShelter(shelter) {
    const body = JSON.stringify(shelter);
    return this.httpClient.post
    (this.SERVER_ADD_SHELTER_URL, body, httpOptions);
  }

  deleteAnimal(id) {
    return this.httpClient.delete(this.SERVER_DELETE_ANIMAL_URL + '?id=' + id, );
  }

  updateAnimal(animal) {
    const body = JSON.stringify(animal)
    return this.httpClient.put(this.SERVER_UPDATE_URL, body, httpOptions);
  }

  getShelters() {
    return this.httpClient.get(this.SERVER_SHELTERS_URL);
  }
}
