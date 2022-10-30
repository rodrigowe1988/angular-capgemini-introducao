import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { CourseModule } from './course.module';
import { CoreModule } from './core/core.module';
import { ErrorNotFoundComponent } from './core/components/error-not-found/error-not-found.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CourseModule,
    CoreModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/courses',
        pathMatch: 'full',
      },
      {
        path: '**', component: ErrorNotFoundComponent
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
