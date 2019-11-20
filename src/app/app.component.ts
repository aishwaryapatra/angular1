import { Component } from '@angular/core';
import {Note} from './note';
import { NotesService } from './notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  errMessage: string;
  note:Note=new Note();
  notes:Array<Note>= [];


constructor(private notesService: NotesService){}

 ngOnInit()
 {
   this.notesService.getNotes().subscribe(
     data=>{
       console.log(data);
       this.notes = data;
     },
     error=>
     {
       // console.log(error);
       this.errMessage=error.message;
     }
   )
 }

 takeNote()
 {
   // console.log(this.note);
   if((this.note.title ||this.note.text)!='')
   {
   this.notesService.addNote(this.note).subscribe(
     data=>{
       
           this.notes.push(data);
       
     },
     error=>
     {
      //  console.log(error);
       this.errMessage=error.message;
     }
   )
   this.note = new Note();
 }

else {
  this.errMessage='Title and Text both are required fields'
    console.log(this.errMessage);
}
 
}
}
