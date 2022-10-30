import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../courses/course-list/Course';
import { CourseService } from '../courses/course.service';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css'],
})
export class CourseInfoComponent implements OnInit {
  course!: Course;

  //através dele podemos pegar as informações da rota que está ativa no momento
  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    //retorna como default uma string
    //esse é o id que estamos solicitando no path da nossa rota do componente
    this.courseService.retrieveById(
      Number(this.activatedRoute.snapshot.paramMap.get('id'))
    ).subscribe({
      next: courseInfo => this.course = courseInfo,
      error: err => console.log("Error: ", err)
    });
  }

  save(): void {
    this.courseService.save(this.course).subscribe({
      next: course => console.log("Saved succesfully! ", course),
      error: err => console.log('Error: ', err)
    });
  }
}
