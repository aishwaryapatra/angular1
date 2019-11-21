import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Note } from './note';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NotesService {
  constructor(private httpClient: HttpClient) {}

  getNotes(): Observable<Array<Note>> {
    return this.httpClient.get<Array<Note>>('http://localhost:3000/notes');
}
getNotesonId(i_d: number):Observable<Note> {
  return this.httpClient.get<Note>('http://localhost:3000/notes/'+i_d);
 }
  addNote(note: Note): Observable<Note> {
    return this.httpClient.post<Note>('http://localhost:3000/notes',note);
 }
 delete(id:number): Observable<{}>{
  return this.httpClient.delete(`http://localhost:3000/notes/${id}`)
}
up(p: Note,id: number): Observable<Array<Note>> {
  return this.httpClient.put<Array<Note>>('http://localhost:3000/notes/'+id,p);
  }
}
