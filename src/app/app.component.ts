import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
    private isAuth : boolean = false; 
    lastUpdate = new Date();
    appareils = [
      {
        name: 'Machine à laver',
        status: 'éteint'
      },
      {
        name: 'Frigo',
        status: 'allumé'
      },
      {
        name: 'Ordinateur',
        status: 'éteint'
      }
    ];
    constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  public onAllumer(): void {
    console.log('On allume tout !');
  }
  public getIsAuth(): boolean{
    return this.isAuth;
  }
  public setIsAuth(value : boolean) : void{
    this.isAuth = value;
  }
}
