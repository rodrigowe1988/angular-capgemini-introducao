import { Component, OnInit } from '@angular/core';
import { Course } from './Course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  constructor() {}

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Angular Course',
        imageUrl: '',
        price: 99.99,
        code: 'XPS 8796',
        duration: 120,
        rating: 6.8,
        releaseDate: '22/10/2022'
      },
      {
        id: 2,
        name: 'Java Course',
        imageUrl: '',
        price: 149.99,
        code: 'XPS 1324',
        duration: 190,
        rating: 7.1,
        releaseDate: '22/10/2022'

      },
      {
        id: 3,
        name: 'MySQL Course',
        imageUrl: '',
        price: 49.99,
        code: 'XPS 5623',
        duration: 50,
        rating: 7.4,
        releaseDate: '22/10/2022'
      },
    ];
  }
}
