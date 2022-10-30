import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ErrorNotFoundComponent } from './components/error-not-found/error-not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    RouterModule,
  ],
  exports: [NavbarComponent],
})
export class CoreModule {}
