import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class ExampleserviceService {

  constructor() { }

  getPeople() {
    return [
      {id: 1, firstName: 'Romek', lastName: 'Kowalski', job: 'informatyk'},
      {id: 2, firstName: 'Barbara', lastName: 'Nowak', job: 'analityk'},
      {id: 3, firstName: 'Jerzy', lastName: 'Nieznany', job: 'fasion designer'},
      {id: 4, firstName: 'Andrzej', lastName: 'Wrhol', job: 'muzyk'}
    ];
  }

}
