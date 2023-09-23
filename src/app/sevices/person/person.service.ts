import { Injectable } from '@angular/core';
import {Person} from "../../model/person/person";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  persons :Person[]=[];
  constructor() {
  }


  getPersons(){
   this. persons =[
      new Person(1,"Muhammed Yasser",22,12000),
      new Person(2,"Ali Yasser",25,8000),
      new Person(3,"Mohamed Salah",30,1200),
      new Person(4,"Mahmoud Farag",22,3300),
    ]
    return this.persons;

  }




}
