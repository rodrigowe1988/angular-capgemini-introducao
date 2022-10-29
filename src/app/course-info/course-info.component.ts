import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {

  courseId!: number;

  //através dele podemos pegar as informações da rota que está ativa no momento
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    //retorna como default uma string
    //esse é o id que estamos solicitando no path da nossa rota do componente
    this.courseId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.courseId)
  }

}
