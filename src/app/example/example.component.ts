import { findReadVarNames } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ExampleserviceService } from '../exampleservice.service';
import { PEOPLE } from '../mock-people';
import { Person } from '../person';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

   // --------------------service----------------------
  public examples = [];

  constructor(private exampleService: ExampleserviceService) { }


  // --------------------{{ product }}----------------------
  product = 'iphone X';

  person: Person = {
    id: 1,
    firstName: 'Romek',
    lastName: 'Kowalski',
    job: 'informatyk'
  };


  // --------------------[value]="email"----------------------
  sampleEmail = 'antoni.kowalski@gmail.pl';


  // --------------------(click)="showSomething()"-----------------------
  textInTextField = 'press the button';

  showSomthing(): void {
    this.textInTextField = 'pressed';
  }


  // --------------------(click)="logMessage(myInput.value)"-----------------------

  textToDisplay = 'write below and press log button';

  logMessage(value) {
    this.textToDisplay = value;
    console.log(value);
  }


  // --------------------*ngModel----------------------
  email = 'example@gmail.com';

  onKeyUp() {
    console.log(this.email);
  }


  // --------------------*ngFor----------------------
  names = ['wacek', 'jacek', 'malgorzata', 'weronika', 'janina'];


  // --------------------*ngIf----------------------
  isRighttButon = false;

  displayLeftButton(): void {
    this.isRighttButon = false;
  }

  displayRightButton(): void {
    this.isRighttButon = true;
  }


  // --------------------*ngSwitch----------------------
  color = 'blue';









  // ------------------------------------------
  // ------------------------------------------
  ngOnInit(): void {
    this.examples = this.exampleService.getPeople();
  }

}
