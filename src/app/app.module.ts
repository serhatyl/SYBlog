import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.routing';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './page-component/header/header.component';
import { FooterComponent } from './page-component/footer/footer.component';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }