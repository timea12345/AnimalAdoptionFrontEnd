import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL = 'http://localhost:8080/findAllA/';
  private SERVER_POST_URL = 'http://localhost:8080/adoption/createAdoption/';

  constructor(private httpClient: HttpClient) { }

  public getAnimals() {
      return this.httpClient.get(this.SERVER_URL);
  }

  adoptAnimal(id) {
    return this.httpClient.post(this.SERVER_POST_URL + '?idUser=1' + '&idAnimal=' + id, null);
  }

}
