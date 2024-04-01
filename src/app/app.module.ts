import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpeninputComponent } from './openinput/openinput.component';
import { OpenplusComponent } from './openplus/openplus.component';
@NgModule({
  declarations: [
    AppComponent,
    OpeninputComponent,
    OpenplusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




