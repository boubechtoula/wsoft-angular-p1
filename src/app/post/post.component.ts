import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() titre : string ; 
  @Input() content : string ;
  @Input() creationDate : Date;
  nbLove : number = 0 ; 
  constructor() { }

  ngOnInit() {
  }
  getTitre() {
    if(this.titre == null ||this.titre == "" ) return "";
    switch (this.titre){
      case "1" : 
      return "Mon premier titre";
      case "2" :
      return "Mon deuxième post";
      case "3" : 
      return "Mon autre post";
    }
  }
  public love(){
    this.nbLove ++;
  }
  public dontLove(){
    this.nbLove--;
  }

}