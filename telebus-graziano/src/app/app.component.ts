import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Post} from './models/post.model';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,PostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'telebus-graziano';
  vettpost: Post[] = [];
  obs! : Observable<Post[]>;
  //mi faccio dare oggetto http da angular
  constructor(private http: HttpClient) {
    //faccio richiesta http per avere i post
   this.obs = this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
//dico all'observable di fare qualcosa quando riceve i dati
    this.obs.subscribe(this.getData);
  }
//funzione che l'observable chiama quando riceve i dati
  getData = (data: Post[]) => {
    console.log(data);
    this.vettpost = data;
  }

  obsPost!: Observable<any>; //per ora non so che dati riceverò
  addPost(userId: string, body: string) {
    let nuovoPost = new Post(userId, body, "0", "senza titolo");
    this.vettpost.push(nuovoPost);
    console.log(this.vettpost);

    //inviare il nuovo post al server
    this.http.post('https://jsonplaceholder.typicode.com/posts', nuovoPost)
    this.obsPost = this.http.post('https://jsonplaceholder.typicode.com/posts', nuovoPost);
    this.obsPost.subscribe(this.rispostaPost);
  }
   //dico all'observable di fare qualcosa quando riceve i dati
    rispostaPost = (data : any) => {

      console.log(data);
      
    } 
}
