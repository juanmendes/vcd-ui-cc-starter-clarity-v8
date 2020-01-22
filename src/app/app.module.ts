import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { ClarityModule } from '@clr/angular';

import { __EXAMPLE_MODULE} from './__EXAMPLE_MODULE_FILE_IMPORT';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, ClarityModule, FormsModule, __EXAMPLE_MODULE],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
