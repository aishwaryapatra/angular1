import { Component,OnInit } from '@angular/core';
import {Note} from './note';
import { NotesService } from './notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  toggle:boolean=false;
    p:number=1;
    errMessage: string;
    id_check:number;
    note:Note=new Note();
    notes:Array<Note>= [];
  
    collection:Array<Note>=[];

  constructor(private notesService: NotesService){
    for(let i=1;i<10;i++){
      this.collection.push(this.note[i])
    }
  }

  ngOnInit()
   {
     this.note=new Note();
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
   );
 }

 takeNote()
 {
   // console.log(this.note);
   if((this.note.title ||this.note.text)!=='')
   {
   this.notesService.addNote(this.note).subscribe(
     data=>{
           this.notes.push(data); 
     },
     error=>
     {
       this.errMessage=error.message;
     }
   );
   this.note = new Note();
   this.toggle=!this.toggle;
 }

else {
  this.errMessage='Title and Text both are required fields';
    console.log(this.errMessage);
}
 
}
delete(note) {
  this.notesService.delete(note.id).subscribe();
   this.note = new Note();
   this.del(note.id);
 }
 del(delid) {
   var element = this.notes.findIndex(a => a.id === delid);
   if (element > -1)
     this.notes.splice(element, 1);
   else
     console.log("Invalid Id no");
}
update(u_id){
  this.toggle=true;
  this.id_check = u_id;
  this.notesService.getNotesonId(u_id).subscribe(
  data => {
    console.log("Data");
    console.log(data);
    //this.note_array = data;
    this.note.title= data.title;
    this.note.text= data.text;
  },
  error => {this.errMessage = error.message; }
);
}
update_submit(){
  this.toggle=!this.toggle;
this.notesService.up(this.note,this.id_check).subscribe(
  data => {
    console.log("Succesfully Submitted");
    console.log(this.id_check);
    let pos = this.notes.findIndex(k => k.id === this.id_check);
    if(pos > -1){
      console.log("go-awya");
      this.notes[pos].title = this.note.title;
      this.notes[pos].text = this.note.text;
      this.id_check= 0;
      //this.note_array.splice(pos,1);
      this.ngOnInit();
    }
  },
  error =>{
    this.errMessage = error.message;
  }
)
}
}
