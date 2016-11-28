// angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// 3rd party 
import { Ng2Webstorage } from 'ng2-webstorage';
import { MaterializeModule } from 'angular2-materialize';

// custom components
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    RouterModule.forRoot([]),
    Ng2Webstorage.forRoot({ prefix: 'mona', separator: '.' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
