import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {  
    posts = [
      {
        titre: '1',
        content: "votre AppComponent contiendra l'array des posts, et il le passera à un component PostListComponent",
        creationDate :  new Date()
      },
      {
        titre: '2',
        content: "les PostListItemComponent auront des boutons qui permettent d'augmenter et de diminuer le nombre de loveIts — cette modification aura uniquement un effet sur le component, et n'a pas besoin d'être remontée au component parent",
        creationDate : new Date()
      },
      {
        titre: '3',
        content: "chaque PostListItemComponent affichera le titre, le contenu et la date de création du post dans le template",
        creationDate : new Date()
      }
    ];
    constructor() {
 
  }
  
}
