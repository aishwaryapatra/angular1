import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component'
import { HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NotesService } from './notes.service';
import {MatButtonModule} from '@angular/material/button'
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [AppComponent,HeaderComponent],
  imports: [BrowserModule,HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule ,
    MatInputModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule],
  providers: [NotesService],
  bootstrap: [AppComponent ]
})
export class AppModule { }
