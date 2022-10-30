import { NgModule } from "@angular/core";
import { CourseListComponent } from "./courses/course-list/course-list.component";
import { CourseInfoComponent } from "./course-info/course-info.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { ReplacePipe } from "./pipe/replace.pipe";
import { CommonModule } from "@angular/common";
import { StarComponent } from "./star/star/star.component";


@NgModule({
  declarations: [
    CourseListComponent,
    CourseInfoComponent,
    ReplacePipe,
    StarComponent
  ],
  //rotas que nosso modulo course possui, como nao é o nosso modulo pai, podemos importar nossas rotas usando o forChild
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      },
    ])
  ]
})
export class CourseModule {

}
