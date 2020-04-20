import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientViewComponent } from './client-view/client-view.component';
import { ToggleInputsComponent } from './toggle-inputs/toggle-inputs.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: '/client',
    pathMatch: 'full'
  },
  {
    path: 'client',
    component: ClientViewComponent
  },
  {
    path: 'toggle',
    component: ToggleInputsComponent
  },
  {
    path: 'fileupload',
    component: FileUploadComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
