import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './photo-list/navbar.component';
import { PhotoDetailComponent } from './photo-list/photo-detail.component';
import { RouterModule } from '@angular/router';
import { routes } from './photo-list/routes';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PhotoListComponent,
    NavbarComponent,
    PhotoDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
