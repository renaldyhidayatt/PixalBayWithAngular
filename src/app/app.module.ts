import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ErrorComponent } from './shared/error/error.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListImageComponent } from './components/list-image/list-image.component';
import { SearchImageComponent } from './components/search-image/search-image.component';

@NgModule({
  declarations: [AppComponent, SpinnerComponent, ErrorComponent, NavbarComponent, ListImageComponent, SearchImageComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
