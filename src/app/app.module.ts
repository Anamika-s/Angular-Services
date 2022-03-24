import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductComponent } from "./product/product.component";
import { NewComponent } from "./new/new.component";
import { StudentComponent } from "./student/student.component";
import { StudentHttpComponent } from "./student-http/student-http.component";
import {HttpClientModule } from  '@angular/common/http'; 
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NewComponent,
    StudentComponent,
    StudentHttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
