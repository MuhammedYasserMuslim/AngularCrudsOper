import { Component } from '@angular/core';
import {Person} from "../../model/person/person";
import {PersonService} from "../../sevices/person/person.service";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {

  persons:Person[]=[];

  personServices:PersonService;

  constructor() {
    this.personServices = new PersonService();
    this.persons=this.personServices.getPersons();
  }
  getPersons(){
     this.persons=this.personServices.getPersons();


  }

  protected readonly Person = Person;
}

















