import { NgModule } from "@angular/core";
import { CourseListComponent } from "./courses/course-list/course-list.component";
import { CourseInfoComponent } from "./course-info/course-info.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { ReplacePipe } from "./pipe/replace.pipe";
import { CommonModule } from "@angular/common";
import { StarModule } from "./shared/component/star/star/star.module";
import { AppPipeModule } from "./shared/pipe/app-pipe.module";


@NgModule({
  declarations: [
    CourseListComponent,
    CourseInfoComponent,
  ],
  //rotas que nosso modulo course possui, como nao é o nosso modulo pai, podemos importar nossas rotas usando o forChild
  imports: [
    FormsModule,
    CommonModule,
    StarModule,
    AppPipeModule,
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
