import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewFolderModalComponent } from './new-folder-modal/new-folder-modal.component';
import { EditColumnsModalComponent } from './edit-columns-modal/edit-columns-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NewFolderModalComponent,
    EditColumnsModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
