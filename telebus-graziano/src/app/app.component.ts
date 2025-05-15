import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Post} from './models/post.model';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,PostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'telebus-graziano';
  vettpost: Post[] = [];
  addPost(nome: string, post: string) {
    let nuovoPost = new Post(nome, post);
    this.vettpost.push(nuovoPost);
    console.log(this.vettpost);
  }
}
