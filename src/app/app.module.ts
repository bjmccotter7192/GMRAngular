import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientViewComponent } from './client-view/client-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipe } from './filter.pipe'
import { NgxMaskModule } from 'ngx-mask';
import { ToggleInputsComponent } from './toggle-inputs/toggle-inputs.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FloatingNumsComponent } from './floating-nums/floating-nums.component'
import { AgmCoreModule } from '@agm/core';

let apiKey: string;

export function getApiKey(){
  this.http.get(window.location.origin + '/backend')
    .subscribe(
      res => {
        apiKey = res.apiKey
      }
    );
}
 
@NgModule({
  declarations: [
    AppComponent,
    ClientViewComponent,
    FilterPipe,
    ToggleInputsComponent,
    NavbarComponent,
    FileUploadComponent,
    FloatingNumsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: apiKey,
      libraries: ['places']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }