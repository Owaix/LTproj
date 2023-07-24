import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'orderBy' })
export class OrderByPipe implements PipeTransform {
  transform(array: any[], property: string): any[] {
    if (!array || !property) {
      return array;
    }

    return array.sort((a, b) => a[property] - b[property]);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.css'],
  providers: [OrderByPipe]
})

export class DynamicFormComponent implements OnInit {
  formSubmit = false;
  dynamicForm: FormGroup;
  title: "";
  sections: any[] = [];
  constructor(private formBuilder: FormBuilder, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.dynamicForm = this.formBuilder.group({});
    this.generateFormControls();
  }

  generateFormControls(): void {

    this.activatedroute.params.subscribe(params => {
      var ds = params['routeName'];
      this.title = ds;
      if (ds == 'student') {
        this.sections = [
          {
            name: 'Student', controls: [
              { type: 'text', name: 'studentName', label: 'Name', required: true, order: 1, value: "Adams" },
              { type: 'number', name: 'studentAge', label: 'Age', required: true, order: 2, value: 20 },
              {
                type: 'select', name: 'studentGender', label: 'Gender', required: true, value: 1 , order : 3, options: [
                  { text: 'Male', value: '1' },
                  { text: 'FeMale', value: '2' }
                ]
              },
              { type: 'checkbox', name: 'studentHobbies', label: 'Hobbies', options: ['Reading', 'Sports'], order: 4, value: "Sports" },
              { type: 'radio', name: 'studentStatus', label: 'Status', options: ['Active', 'Inactive'], order: 5, value: "Inactive" },
              { type: 'textarea', name: 'studentAddress', label: 'Address', order: 6, value: "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph." },
            ]
          },
          {
            name: 'Teacher', controls: [
              { type: 'text', name: 'teacherName', label: 'Name', required: true },
              { type: 'text', name: 'teacherSubject', label: 'Subject', required: true },
              // Add more teacher-related controls here
            ]
          },
          // Add more sections (e.g., Staff, Parent) with their respective controls here
        ];
      } else {
        this.sections = [
          {
            name: 'Teacher', controls: [
              { type: 'text', name: 'teacherName', label: 'Name', required: true },
              { type: 'text', name: 'teacherSubject', label: 'Subject', required: true },
              // Add more teacher-related controls here
            ]
          },
          // Add more sections (e.g., Staff, Parent) with their respective controls here
        ];
      }

    });

    this.sections.forEach(section => {
      section.controls.forEach((control: any) => {
        const validators = control.required ? [Validators.required] : [];
        const formControl = new FormControl(control.value, validators);
        this.dynamicForm.addControl(control.name, formControl);
      });
    });
  }

  onSubmit(): void {
    if (this.dynamicForm.valid) {
      // Handle form submission here
      console.log(this.dynamicForm.value);
    } else {
      this.formSubmit = true;
    }
  }
}