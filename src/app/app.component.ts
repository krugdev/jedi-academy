import { Component } from '@angular/core';

import {Student} from './student/student.model'

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  students: Student[] = [
    {name: 'Luke', isJedi:true, temple: 'Conruscant'},
    {name: 'Leia', isJedi:false},
    {name: 'Han Solo', isJedi:false}
  ]
}
